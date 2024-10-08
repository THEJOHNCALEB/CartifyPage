import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Cartify - AI Powered Shopping List App",
  description:
    "Cartify - AI Powered Shopping List App By John Caleb - Effortlessly manage your shopping lists, stay organized, and save time with Cartify",
  metadataBase: new URL("https://usecartify.vercel.app"),
  twitter: {
    card: "summary_large_image",
    image: "https://usecartify.vercel.app/media/logo.png",
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center pt-32">
          {children}
        </main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
