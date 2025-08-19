import type { Metadata } from "next";
import "./globals.css";
import Appbar from "@/components/shared/Appbar";
import { Sora, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Providers from "./provider";
import Footer from "@/components/shared/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - CodeWithKara",
    default: "Gaurav Singh - Software Engineer",
  },
  description: "Gaurav Singh (codewithkara) Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Appbar />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
