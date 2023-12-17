import React from "react";
import { Logo } from "./_components/Logo";

export default function hello({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col space-y-6 items-center justify-center">
      <Logo />
      {children}
    </div>
  );
}
