import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}
const Container = ({ className, children }: Props) => {
  return (
    <div className={cn("max-w-[1260px] mx-auto px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
