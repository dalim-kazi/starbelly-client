import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/Data/Provider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starbelly",
  description: "Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>{`.inter-font { font-family: ${inter.css}; }`}</style>
      </head>
      <body className="inter-font">
        <ReduxProvider>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
