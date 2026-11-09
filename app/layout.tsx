import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reza-putra-pratama.vercel.app"),
  title: "Reza Putra Pratama, Flutter mobile developer",
  description:
    "Hi, I’m Reza, a Flutter developer in Bekasi with four apps live in the stores, building HRIS, property and commerce apps for Android and iOS.",
  openGraph: {
    title: "Reza Putra Pratama, Flutter mobile developer",
    description: "Hi, I’m Reza. I build Flutter apps, and four are live in the stores.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link href="https://api.fontshare.com/v2/css?f[]=chillax@500,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
