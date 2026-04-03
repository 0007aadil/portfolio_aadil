import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});


export const metadata: Metadata = {
  title: "Aadil Ahsan | Full-Stack & iOS Developer",
  description:
    "Portfolio of Aadil Ahsan — Full-Stack Developer, iOS Engineer, and Computer Networking student at SRM IST. Specializing in Next.js, React, Swift, and scalable web architectures.",
  keywords: [
    "Aadil Ahsan",
    "Full Stack Developer",
    "iOS Developer",
    "Next.js",
    "React",
    "SRM IST",
    "Portfolio",
  ],
  authors: [{ name: "Aadil Ahsan" }],
  openGraph: {
    title: "Aadil Ahsan | Full-Stack & iOS Developer",
    description: "Full-Stack Developer and iOS Engineer based in Chennai, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
