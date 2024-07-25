import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


// import ProviderRedux from "@/lib/redux/ProviderRedux";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Hlolak",
  description: "Hlolak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <ProviderRedux> */}
        <body className={"min-h-full"} dir="rtl">
          {children}
        </body>
      {/* </ProviderRedux> */}
    </html>
  );
}
