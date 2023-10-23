import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import { Footer } from "@/components/ui/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce FSW",
  description: "Feito na semana da Full Stack Week.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="w-full h-full flex flex-col">
          <AuthProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
