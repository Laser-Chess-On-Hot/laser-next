"use server";

import { prisma } from "@/prisma/prisma";
import crypto from "crypto";

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
