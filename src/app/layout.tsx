// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Footer from "../components/footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//             <head>
//         <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&f[]=clash-display@400,500&display=swap" rel="stylesheet" />
//       </head>
//       <body className={inter.className}>{children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";

// Import Inter font, but we'll use it selectively
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&f[]=clash-display@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Footer with Inter font if needed */}
        <Footer  />
      </body>
    </html>
  );
}


