import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
//import { useEffect } from "react";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   document.documentElement.classList.remove("dark");
  // });

  return (
    <html>
      {/* from-[#142a41] md:from-gray-900 to-[#193d46] md:to-[#193d46] */}
      <body className={`bg-lines bg-gray-900 ${grotesk.className}`}>
        <div className="absolute left-[10%] top-[-20%] pointer-events-none opacity-40 rounded-lg w-4/5 bg-[#6C4BEF] blur-[290px] h-[50vh] drop-shadow-[0_35px_35px_#6C4BEF]"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
