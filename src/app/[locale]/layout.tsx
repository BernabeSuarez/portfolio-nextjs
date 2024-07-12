import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bernabe Suarez",
  description: "Portfolio personal, creado con Nextjs",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <meta
        name="google-site-verification"
        content="gspA0M6MQLnkIlZvVxWwQSOSx-RFBHPp2YR1eseujYI"
      />
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          <Navbar />
          <Toaster position="bottom-center" />
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
