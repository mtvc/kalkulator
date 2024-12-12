import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

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
  description:
    "Online kalkulator - procenti, zarade, porez, registracija, centimetri u inče",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="py-12 grid">
          <main className="max-w-7xl mx-auto flex flex-col w-full">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
