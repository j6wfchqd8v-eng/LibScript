export const metadata = {
  title: "LibSkript",
  description: "Osobní studijní knihovna s AI"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import type { ReactNode } from "react";
}
