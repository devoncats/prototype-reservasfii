import Link from "next/link";
import React from "react";

export function LoginTOS() {
  return (
    <p className="caption max-w-xs text-center">
      <span>Al ingresar, aceptas nuestros </span>
      <Link className="hover:text-foreground underline" href="/">
        términos y condiciones
      </Link>
      <span> y </span>
      <Link className="hover:text-foreground underline" href="/">
        políticas de privacidad
      </Link>
      <span>.</span>
    </p>
  );
}
