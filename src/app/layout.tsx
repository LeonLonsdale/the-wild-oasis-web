import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/_styles/globals.css";
import MainNavigation from "@/_components/layout/navigation/main-navigation";
import Header from "@/_components/layout/header/header";
import Logo from "@/_components/common/logo";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap", // show a fallback font while the web font is loading
});

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
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header>
          <Logo />
          <MainNavigation />
        </Header>
        <main className="flex-1 px-8 py-12">
          <div className="max-w-7xl mx-auto ">{children}</div>
        </main>
      </body>
    </html>
  );
}
