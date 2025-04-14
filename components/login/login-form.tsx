"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { handleSignIn } from "@/lib/handle-auth";
import { toast } from "sonner";

export function LoginForm() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await handleSignIn();
    } catch (error) {
      console.error(error);
      toast("Error al iniciar sesión", {
        description: "Por favor, intenta nuevamente.",
      });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <Button
          type="submit"
          variant="outline"
          className="text-foreground bg-background hover:text-foreground hover:bg-muted h-12 w-96 rounded px-16 py-1 shadow-none transition-colors duration-200 hover:cursor-pointer"
          disabled={loading}
        >
          <Loader2 className="h-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          variant="outline"
          className="text-foreground bg-background hover:text-foreground hover:bg-muted h-12 w-96 rounded px-16 py-1 shadow-none transition-colors duration-200 hover:cursor-pointer"
          disabled={loading}
        >
          <Image
            src="/logos/logo-utp.svg"
            alt="Logo UTP"
            width={30}
            height={30}
          />
          <span className="font-medium">Iniciar sesión con Correo UTP</span>
        </Button>
      )}
    </form>
  );
}
