"use client";

import { register } from "@/actions/register";
import { login } from "@/actions/login";
import { useState } from "react";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

// const publicKey = `-----BEGIN PUBLIC KEY-----
// MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKj34GkxFhD90vcNLYLInFEX6Ppy1tPf
// 9Cnzj4p4WGeKLs1Pt8QuKUpRKfFLfRYC9AIKjbJTWit+CqvjWYzvQwECAwEAAQ==
// -----END PUBLIC KEY-----`;

const keyPair = nacl.sign.keyPair();

export default function Home() {
  const [username, setUsername] = useState("");
  const [nonce, setNonce] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister() {
    const res = await register({
      username,
      publicKey: naclUtil.encodeBase64(keyPair.publicKey),
    });
    setNonce(res.nonce);
  }

  async function handleLogin() {
    const nonce =
      "36bd7cfb5f8ffc7e3e483270ed38a868492746f0a23c0c01798bc23f6b764304";
    const nonceUint8 = naclUtil.decodeUTF8(nonce);

    const signature = nacl.sign.detached(nonceUint8, keyPair.secretKey);
    const sigBase64 = naclUtil.encodeBase64(signature);

    const res = await login("d", sigBase64);
    setSuccess(res.success);
    setMessage(res.message);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <label>username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <button onClick={handleRegister}>register</button>
      <p>nonce: {nonce}</p>
      <button onClick={handleLogin}>login</button>
      <p>login success: {success ? "true" : "false"}</p>
      <p>login message: {message}</p>
    </main>
  );
}
