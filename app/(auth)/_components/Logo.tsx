import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";
const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export function Logo() {
  return (
    <div className={cn(["font-bold", font.className])}>
      Tanay Van Twitch Clone
    </div>
  );
}
