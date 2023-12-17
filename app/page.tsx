"use client";
import { UserButton } from "@clerk/nextjs";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div className="h-screen flex">
      <UserButton />
    </div>
  );
}
