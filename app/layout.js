import { Roboto_Serif, Work_Sans } from "next/font/google";
import "./globals.css";
import Cards from "./Component/Cards/Cards";
import Footer from "./Component/Footer/page";

const inter = Roboto_Serif({ subsets: ["latin"], variable: "--font-roboto" });
const work = Work_Sans({ subsets: ["latin"], variable: "--font-work" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${work.variable}`}>
        {children}
        <Footer />
        {/* <Cards /> */}
      </body>{" "}
    </html>
  );
}
