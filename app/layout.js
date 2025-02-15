import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zscrum",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 🩷 by Ana Stone</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
