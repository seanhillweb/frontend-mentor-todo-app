/**
 * Summary.
 *
 * Description. A layout is UI that is shared between routes.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import Script from "next/script";
import "@/styles/globals.css";
import { AppThemeProvider } from "@/context/app-theme-provider";
import { AppContextProvider } from "@/context/app-context-provider";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Mentor | Todo app",
  description: "Built with React, Next.js, Typescript, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={josefinSans.className}>
        <AppThemeProvider>
          <AppContextProvider>{children}</AppContextProvider>
        </AppThemeProvider>
      </body>
      <Script src="/static/support-color-mode.js" />
    </html>
  );
}
