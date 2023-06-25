import "./globals.css";
import Header from "../app/components/Header";
import { Mulish } from "next/font/google";
import Footer from "../app/components/Footer";
import { Providers } from "./providers";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Next Js Starter",
  description: "You Can get this file and start your project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
