import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const runtime = "edge";

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
  title: {
    default: "Online kalkulatori",
    template: "%s - Online kalkulatori",
  },
  description: "Online kalkulatori - procenti, dužine, bmi, mase...",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="sr">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1051827320642324"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></script>
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
    </>
  );
}
