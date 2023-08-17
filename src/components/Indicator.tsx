import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
export default function Indicator({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "rounded-full px-4 py-1 text-center font-medium text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
