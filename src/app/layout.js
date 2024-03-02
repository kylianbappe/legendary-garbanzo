import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Created with next.js",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
