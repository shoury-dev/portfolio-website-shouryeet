import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shouryjeet Gupta - Portfolio | CEO (Chief Everything Officer)",
  description:
    "Explore the portfolio of Shouryjeet Gupta, a seasoned professional with expertise in both technology and non-technology domains. As a management candidate and Shark Tank India S3 & S4 finalist, Shouryjeet is a dreamer, achiever, and hard worker with a strong background in entrepreneurship. Known for quick learning and a passion for innovation, Shouryjeet continues to make impactful contributions across diverse fields.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/brand.jpg" />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
