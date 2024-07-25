"use server";

import { prisma } from "@/prisma/prisma";
import crypto from "crypto";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

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

export async function login(username: string, signature: string) {
  if (!username) {
    throw new Error("Username is required");
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  // const user = {
  //   id: 0,
  //   username: "d",
  //   publicKey: "",
  //   nonce: "36bd7cfb5f8ffc7e3e483270ed38a868492746f0a23c0c01798bc23f6b764304",
  // };

  if (!user) {
    throw new Error("User not found");
  }

  const { publicKey, nonce } = user;
  console.log("user signedNonce", signature);

  const isVerified = verifySignedNonce(publicKey, nonce, signature);

  console.log("isVerified", isVerified);

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
  signature: string,
): boolean {
  const publicKeyUint8 = naclUtil.decodeBase64(publicKey);
  const nonceUint8 = naclUtil.decodeUTF8(nonce);

  const signatureUint8 = naclUtil.decodeBase64(signature);

  return nacl.sign.detached.verify(nonceUint8, signatureUint8, publicKeyUint8);
}

export async function logout() {
  cookies().delete("access-token");
}

export async function getUserByJWT() {
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

  return user;
}
