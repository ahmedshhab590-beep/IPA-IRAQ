
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPA HUB | iOS App Store",
  description: "Discover iOS apps and games with IPA HUB.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IPA HUB"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
