import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/layer/LenisProvider";
import { Toaster } from "react-hot-toast";
import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "SIMPLE WOOD",
  description: "Modern furniture store",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" cz-shortcut-listen="true">
        <LenisProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
