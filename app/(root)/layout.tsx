import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "../../components/shared/header";
import Footer from "@/components/shared/footer";
import ChatIcon from "@/components/cards/ChatBotIcon";
// import ProviderRedux from "@/lib/redux/ProviderRedux";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <ProviderRedux> */}
        <body className={inter.className} dir="rtl">
          <NavBar />
          {children}
          <Footer />
          <ChatIcon/>
        </body>
      {/* </ProviderRedux> */}
    </html>
  );
}
