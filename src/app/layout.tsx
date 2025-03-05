import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/style/globals.css";

const robotoFont = Roboto({
  subsets : ['latin'],
  weight : "400",
});

// title: "The Daily News",
// description: "Daily News Site Always Keeps You Updated With the Latest Information.",

export const metadata: Metadata = {
  title: "The Daily News",
  description: "Daily News Site Always Keeps You Updated With the Latest Information.",
  // ! Adding dynamical favicon in site
 icons : {
  icon : [
    {
      media : "(prefers-color-scheme: light)",
      url : "/images/favicon-1-32x32.png",
      href : "/images/favicon-1-32x32.png"
    },
    {
      media : "(prefers-color-scheme: dark)",
      url : "/images/favicon-32x32.png",
      href : "/images/favicon-32x32.png"
    },
  ]
 }
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body
        className={`${robotoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
