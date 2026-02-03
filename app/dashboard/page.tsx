import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🎓 Studentské notebooky</h1>
      <Link href="/notebooks/1">Otevřít notebook</Link>
    </div>
  );
}
