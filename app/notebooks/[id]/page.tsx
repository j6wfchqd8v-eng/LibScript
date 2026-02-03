"use client";

import { useState } from "react";

export default function NotebookPage() {
  const [notes, setNotes] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askAI() {
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes, question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>📓 Notebook</h1>

      <textarea
        placeholder="Vlož poznámky…"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={10}
        style={{ width: "100%" }}
      />

      <input
        placeholder="Zeptej se AI…"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "100%", marginTop: 10 }}
      />

      <button onClick={askAI} style={{ marginTop: 10 }}>
        🤖 Zeptat se AI
      </button>

      {answer && (
        <div style={{ marginTop: 20 }}>
          <h3>Odpověď:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
