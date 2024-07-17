import { AOSInit } from "./components/AOSInit";
import "./globals.css";
import { unlock, inter, poppins } from "./utils/fonts";

export const metadata = {
  title: "IntegraEM",
  description: "Nudimo najboljše arhitekturne zasnove, gradbene in vzdrževalne storitve za vas.",
  icons: {
    icon: "/integraicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${inter} ${unlock} ${poppins}`}>{children}</body>
    </html>
  );
}
