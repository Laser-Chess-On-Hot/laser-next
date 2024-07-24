"use server";

import { prisma } from "@/prisma/prisma";
import crypto from "crypto";
import naclUtil from "tweetnacl-util";

export async function register({
  publicKey,
  username,
}: {
  publicKey: string;
  username: string;
}) {
  if (!publicKey) {
    throw new Error("Public key is required");
  }

  try {
    const _ = naclUtil.decodeBase64(publicKey);
  } catch (error: any) {
    throw new Error("The public key must be base64 encoded");
  }

  const nonce = crypto.randomBytes(32).toString("hex");

  try {
    const user = await prisma.user.create({
      data: {
        username,
        publicKey,
        nonce,
      },
    });

    return { nonce: user.nonce };
  } catch (error: any) {
    console.log("register error", error);
    if (error.code === "P2002" && error.meta.target === "User_public_key_key") {
      throw new Error("Public key already exists");
    }

    throw new Error("Internal server error");
  }
}
