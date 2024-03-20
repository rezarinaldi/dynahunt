import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description:
    "Find & Hire Influencer to Create Unique Content for Your Company or Brand",
  authors: ["Dynacode"],
  icons: {
    icon: "/img/dh.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
