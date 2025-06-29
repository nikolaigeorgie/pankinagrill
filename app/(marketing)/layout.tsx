import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Pankina Grill | Authentic Mediterranean & Middle Eastern Cuisine",
  description:
    "Pankina Grill offers authentic Mediterranean and Middle Eastern cuisine. Fresh shawarma, Persian kebabs, falafel, and traditional dishes prepared daily. Delivery, takeout, and catering available.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Pankina Grill | Authentic Mediterranean & Middle Eastern Cuisine",
    description:
      "Fresh Mediterranean and Middle Eastern cuisine prepared daily. Authentic flavors, traditional recipes, exceptional service. Order delivery, takeout, or dine-in.",
    images: [
      {
        url: "/images/image3.png",
        width: 800,
        height: 600,
        alt: "Pankina Grill - Mediterranean & Middle Eastern Cuisine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankina Grill | Mediterranean & Middle Eastern Restaurant",
    description:
      "Authentic Mediterranean and Middle Eastern cuisine. Fresh ingredients, traditional flavors, fast delivery. Order now!",
    images: ["/images/logo.png"],
  },
  keywords: [
    "Mediterranean restaurant",
    "Middle Eastern food",
    "shawarma",
    "kebabs",
    "falafel",
    "hummus",
    "Persian cuisine",
    "delivery",
    "takeout",
    "catering",
    "fresh ingredients",
    "authentic flavors",
  ],
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
