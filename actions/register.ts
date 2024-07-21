// actions/register.ts

"use server";

import { prisma } from "./prisma";
import crypto from "crypto";

export async function register(public_key: string) {
  if (!public_key) {
    throw new Error("Public key is required");
  }

  const nonce = crypto.randomBytes(32).toString("hex");

  try {
    const user = await prisma.user.create({
      data: {
        public_key,
        nonce,
      },
    });

    return { nonce: user.nonce };
  } catch (error: any) {
    if (error.code === "P2002" && error.meta.target === "User_public_key_key") {
      throw new Error("Public key already exists");
    }

    throw new Error("Internal server error");
  }
}
