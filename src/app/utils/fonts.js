import { Unlock, Inter, Poppins } from "next/font/google";

const unlock_init = Unlock({
  subsets: ["latin"],
  variable: "--font-unlock",
  weight: "400",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

const inter_init = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const unlock = unlock_init.variable;
export const inter = inter_init.variable;
export const poppins = poppins_init.variable;
