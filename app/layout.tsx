import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import fav from "@/app/logo.png"
import Head from "next/head";

export const metadata = {
  openGraph: {
    title: 'Cartify - AI Powered Shopping List App',
    description: 'Experience the future of shopping with Cartify, the ultimate app for managing your shopping lists.',
    url: 'https://usecartify.vercel.app',
    siteName: 'Cartify',
    images: [
      {
        url: 'https://usecartify.vercel.app/media/logo.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://usecartify.vercel.app/media/logo.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Cartify',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <meta property="og:image" content="https://usecartify.vercel.app/media/logo.png" />
      </Head>
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
