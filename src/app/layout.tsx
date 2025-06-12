import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Header, Footer } from "../components";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"], // Add the weights you need
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export const metadata: Metadata = {
  title: "stormy's Dev Blog",
  description:
    "Ein persönlicher Blog über Webentwicklung, JavaScript, React und Tech-Projekte",
  authors: [{ name: "stormy", url: "https://void0.de" }],
  keywords: [
    "Webentwicklung",
    "JavaScript",
    "React",
    "Next.js",
    "Frontend",
    "Projekte",
    "Tech Blog",
    "stormyark",
    "Obsidian",
  ],
  openGraph: {
    title: "stormy's Dev Blog",
    description:
      "Erfahre mehr über moderne Webentwicklung und persönliche Projekte rund um JavaScript, React und Co.",
    url: "https://void0.de",
    siteName: "stormy's Dev Blog",
    locale: "de_DE",
    type: "website",
  },
  metadataBase: new URL("https://void0.de"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${ibmPlexMono.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
