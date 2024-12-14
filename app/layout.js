import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "%s - Kalkulator onlajn",
  description: "Online kalkulatori - procenti, dužine, bmi, mase...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>
        <Header />
        <main
          id="root"
          className="max-w-7xl mx-auto flex flex-col w-full py-12"
        >
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-P91MD20D22" />
      </body>
    </html>
  );
}
