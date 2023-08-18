import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
export default function Indicator({
  className,
  children,
  focusedId,
  id,
}: {
  focusedId: string;
  className: string;
  children: ReactNode;
  id: string;
}) {
  return (
    <div
      className={twMerge(
        "rounded-full px-4 py-1 text-center font-medium text-white",
        className,
        id === focusedId ? "bg-gray-300 text-black" : "",
      )}
    >
      {children}
    </div>
  );
}
