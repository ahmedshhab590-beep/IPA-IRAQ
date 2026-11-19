
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPA HUB | iOS App Store",
  description:
    "IPA HUB - Discover iOS apps and games. Founded by Ahmed Al-Mousawi.",
  applicationName: "IPA HUB",
  authors: [{ name: "Ahmed Al-Mousawi" }],
  creator: "Ahmed Al-Mousawi",
  publisher: "IPA HUB",
  keywords: [
    "IPA HUB",
    "iOS Apps",
    "iPhone Games",
    "IPA Downloads",
    "Ahmed Al-Mousawi"
  ],
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

