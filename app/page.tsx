"use client";

import { register } from "@/actions/register";
import { login } from "@/actions/login";
import { useState } from "react";

// const publicKey = `-----BEGIN PUBLIC KEY-----
// MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKj34GkxFhD90vcNLYLInFEX6Ppy1tPf
// 9Cnzj4p4WGeKLs1Pt8QuKUpRKfFLfRYC9AIKjbJTWit+CqvjWYzvQwECAwEAAQ==
// -----END PUBLIC KEY-----`;

const publicKey = "ed25519:6Fzh1SkiJm2s3LzSt9JuvG71mbayGP4RhJAjabZPWTMo";

export default function Home() {
  const [username, setUsername] = useState("");
  const [nonce, setNonce] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister() {
    const res = await register({ username, publicKey });
    setNonce(res.nonce);
  }

  async function handleLogin() {
    const res = await login(username, nonce);
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
