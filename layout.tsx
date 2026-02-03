export const metadata = {
  title: "LibSkript",
  description: "Osobní studijní knihovna s AI"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
