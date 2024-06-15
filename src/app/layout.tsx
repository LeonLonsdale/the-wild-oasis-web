import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/_styles/globals.css";
import MainNavigation from "@/_components/layout/navigation/main-navigation";
import Header from "@/_components/layout/header/header";
import Logo from "@/_components/common/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "Luxurious cabins in beautiful locations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header>
          <Logo />
          <MainNavigation />
        </Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
