import { signIn } from "@/lib/auth";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginButton() {
  return (
    <div className="flex flex-col items-center gap-1">
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/" });
        }}
      >
        <Button
          type="submit"
          variant="outline"
          className="h-fit rounded px-16 py-1 shadow-none hover:cursor-pointer"
        >
          <Image
            src="/logos/logo-utp.svg"
            alt="Logo UTP"
            width={35}
            height={35}
          />

          {/* loading state */}
          <span className="font-normal">Iniciar sesión con Correo UTP</span>
        </Button>
      </form>

      <p className="caption max-w-sm text-center">
        Al ingresar, aceptas nuestros{" "}
        <Link className="underline" href="/">
          terminos y condiciones
        </Link>{" "}
        y{" "}
        <Link className="underline" href="/">
          politicas de privacidad
        </Link>
        .
      </p>
    </div>
  );
}
