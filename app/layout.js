import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Load the fonts
const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});



export const metadata = {
  title: "Portfolio - kanchana",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        `}
      >
        {children}
      </body>
    </html>
  );
}
/*dark:text-white*/