import { cn } from "../lib/utils";
import { ReactNode } from "react";

export default function BackgroundGrid({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className={cn(
          "absolute inset-0 pointer-events-none -z-10",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#e5e7eb_1px,transparent_2px)]"
        )}
      />
      {children}
    </div>
  );
}
