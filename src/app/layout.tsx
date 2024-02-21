import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dan Koyuki",
  description: "Web Profile of Irwanto Danang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="2xtToYMAGYHmQa4pCOMb8rKIkCjbUmdwKcvGzt7xL0A"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
