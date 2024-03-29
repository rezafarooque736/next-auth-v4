import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NextAuthProvider from "@/context/next-auth-providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <main className="h-screen flex flex-col justify-center items-center">
            <Header />
            {children}
          </main>
          <Toaster
            position="top-right"
            toastOptions={{
              unstyled: true,
              classNames: {
                error:
                  "bg-rose-50 w-full px-4 py-2 text-rose-600 border-rose-700 rounded-lg flex items-center gap-4",
                success:
                  "bg-emerald-50 w-full px-4 py-2 text-emerald-600 border-emerald-700 rounded-lg flex items-center gap-4",
                warning:
                  "bg-amber-50 w-full px-4 py-2 text-amber-600 border-amber-700 rounded-lg flex items-center gap-4",
                info: "bg-sky-50 w-full px-4 py-2 text-sky-600 border-sky-700 rounded-lg flex items-center gap-4",
              },
            }}
          />
        </NextAuthProvider>
      </body>
    </html>
  );
}
