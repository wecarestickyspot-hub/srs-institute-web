import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 Yahan par humne SEO (Google Search) ka data update kiya hai
export const metadata: Metadata = {
  title: "SRS Computer Institute | Best IT Training in Sikar",
  description: "Join SRS Computer Institute in Sikar, Rajasthan. Learn Full-Stack Web Development, Data Science, Cyber Security, Tally, and Digital Marketing from industry experts.",
  keywords: ["Computer Center in Sikar", "Web Development course", "Data Science training", "Cyber Security classes Sikar", "SRS Institute Sikar", "Best Computer Institute Sikar", "Piprali road computer coaching"],
  // 👇 Yeh naya hissa WhatsApp/Facebook par aapki photo aur sahi details dikhayega
  openGraph: {
    title: "SRS Computer Institute | Job-Oriented IT Courses",
    description: "Sikar's premium computer training center. Become market-ready with advanced courses on Piprali Road.",
    url: "https://www.srscomputerinstitute.in", // Aapka asli domain
    siteName: "SRS Computer Institute",
    images: [
      {
        url: "https://www.srscomputerinstitute.in/logo.jpg", // WhatsApp pe share karne par jo photo dikhegi
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}