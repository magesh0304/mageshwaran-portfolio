import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mageshwaran M | AI Developer Portfolio",
  description:
    "Portfolio of Mageshwaran M — Junior Full Stack Developer, AI Enthusiast, and Prompt Engineer. Explore my projects, skills, and journey in building intelligent digital experiences.",
  keywords: [
    "Mageshwaran M",
    "Full Stack Developer",
    "AI Developer",
    "Web Developer",
    "Prompt Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Mageshwaran M" }],
  openGraph: {
    title: "Mageshwaran M | AI Developer Portfolio",
    description:
      "Crafting intelligent digital experiences with AI & code. Explore my portfolio.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mageshwaran M | AI Developer Portfolio",
    description:
      "Crafting intelligent digital experiences with AI & code.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ cursor: "none" }}>{children}</body>
    </html>
  );
}
