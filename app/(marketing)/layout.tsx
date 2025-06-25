import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Prince Paws | Luxury Dog Care Service",
  description:
    "Prince Paws offers premium dog care services including luxury day care, spa & grooming, training, and special events. Your furry companion deserves the royal treatment.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Prince Paws | Luxury Dog Care Service",
    description:
      "Premium care for your royal companions. Where every pet is treated like royalty.",
    images: [
      {
        url: "/images/royal_dog_logo.png",
        width: 800,
        height: 600,
        alt: "Royal Dog - Prince Paws",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Paws | Luxury Dog Care Service",
    description:
      "Premium care for your royal companions. Where every pet is treated like royalty.",
    images: ["/images/royal_dog_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
