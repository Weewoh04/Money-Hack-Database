import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Money Hack Database | Save Money, Find Help, Stretch Your Budget",
    template: "%s | Money Hack Database",
  },
  description:
    "Search legitimate money-saving resources, financial assistance programs, side hustle ideas, cashback tools, coupons, and budget-help strategies.",
  openGraph: {
    title: "Money Hack Database",
    description:
      "A searchable database of practical money hacks, assistance programs, cashback tools, side income ideas, and everyday savings strategies.",
    type: "website",
    siteName: "Money Hack Database",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
