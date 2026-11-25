import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://helios-consulting.appwrite.network"),
  title: "HELIOS Customer Operations — Dedicated Support Pods from Kigali",
  description:
    "Dedicated customer operations pods in Kigali, Rwanda — specialist support teams working inside your tools, with transparent pricing and rigorous quality governance.",
  icons: {
    icon: "/assets/logo-mark.png",
  },
  openGraph: {
    title: "HELIOS Customer Operations — Dedicated Support Pods from Kigali",
    description:
      "Dedicated customer operations pods in Kigali, Rwanda — specialist support teams working inside your tools, with transparent pricing and rigorous quality governance.",
    type: "website",
    images: ["/assets/logo-lockup.png"],
  },
  other: {
    "color-scheme": "light",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts as in the source site. Loaded as plain stylesheet links so the
            build never depends on fetching them; system fallbacks apply offline. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
