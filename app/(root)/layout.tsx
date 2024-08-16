import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "../../components/shared/header";
import Footer from "@/components/shared/footer";
import ChatIcon from "@/components/cards/ChatBotIcon";
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
  <div className="">

          <NavBar />
          {children}
          <Footer />
  </div>

  );
}
