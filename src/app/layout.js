import { Inter } from "next/font/google";
import "./globals.css";
import { SearchContextProvider } from "./components/context/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarRental",
  description: "car rental sevices ",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </SearchContextProvider>
  );
}
