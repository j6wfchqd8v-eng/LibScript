"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <main style={{ padding: 40 }}>
      <h1>Přihlášení</h1>

      <input
        type="email"
        placeholder="tvuj@email.cz"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, marginTop: 10 }}
      />

      <br />

      <button
        onClick={() => signIn("email", { email })}
        style={{ marginTop: 20 }}
      >
        Poslat přihlašovací odkaz
      </button>
    </main>
  );
}
