import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = "large" }: { size?: "small" | "large" }) {
  const sizes = {
    small: { width: 40, height: 50, fontSize: "text-sm" },
    large: { width: 68, height: 85, fontSize: "text-lg" },
  };

  return (
    <Link href="https://fii.utp.ac.pa" className="flex gap-1">
      <Image
        src={"/logos/logo-fii.svg"}
        alt="Logo"
        width={sizes[size].width}
        height={sizes[size].height}
      />
      <h1
        className={cn(
          "flex flex-col justify-center font-sans font-semibold",
          sizes[size].fontSize
        )}
      >
        <span>RESERVAS</span>
        <span>FII</span>
      </h1>
    </Link>
  );
}
