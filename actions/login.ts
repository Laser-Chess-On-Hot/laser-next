"use server";

import { prisma } from "./prisma";
import crypto from "crypto";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function generate_nonce(
  username: string,
): Promise<{ nonce: string }> {
  if (!username) {
    throw new Error("Username is required");
  }

  const nonce = crypto.randomBytes(32).toString("hex");

  const user = await prisma.user.update({
    where: { username: username },
    data: { nonce: nonce },
  });

  return { nonce: user.nonce };
}

export async function login(username: string, signedNonce: string) {
  if (!username || !signedNonce) {
    throw new Error("Username and signed nonce are required");
  }

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const { public_key, nonce } = user;

  const isVerified = verifySignedNonce(public_key, nonce, signedNonce);

  if (isVerified) {
    if (!JWT_SECRET) {
      throw new Error("Authentication failed");
    }

    const token = jwt.sign(
      { username: user.username, id: user.id },
      JWT_SECRET,
      { expiresIn: "24h" },
    );

    cookies().set("access-token", token);
    return { success: true, message: "User authenticated" };
  } else {
    throw new Error("Authentication failed");
  }
}

function verifySignedNonce(
  publicKey: string,
  nonce: string,
  signedNonce: string,
): boolean {
  const verify = crypto.createVerify("SHA256");
  verify.update(nonce);
  verify.end();

  const publicKeyBuffer = Buffer.from(publicKey, "base64");
  const signedNonceBuffer = Buffer.from(signedNonce, "base64");

  return verify.verify(publicKeyBuffer, signedNonceBuffer);
}

export async function logout() {
  cookies().delete("access-token");
}

export async function verifyJWT() {
  const token = cookies().get("access-token");

  if (!token?.value) {
    throw new Error("Token is required");
  }

  if (!JWT_SECRET) {
    throw new Error("Verification failed");
  }

  const decoded: any = jwt.verify(token.value, JWT_SECRET);

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
}
