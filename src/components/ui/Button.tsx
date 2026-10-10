import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  icon?: ReactNode;
};

export function Button({ href, children, variant = "solid", icon }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold font-display transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "solid"
      ? "bg-accent text-white hover:bg-white hover:text-bg"
      : "border border-line text-text hover:border-accent hover:text-accent";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {icon}
      {children}
    </Link>
  );
}
