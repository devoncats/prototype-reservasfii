"use client";

import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { handleSignOut } from "@/lib/handle-auth";
import { toast } from "sonner";

export function LogoutForm() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await handleSignOut();
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      toast("Sesión cerrada", {
        description: "Has cerrado sesión correctamente.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <Button
          type="submit"
          variant="outline"
          className="text-foreground bg-background hover:text-foreground hover:bg-muted h-9 w-40 rounded px-8 py-1 shadow-none transition-colors duration-200 hover:cursor-pointer"
          disabled={loading}
        >
          <Loader2 className="h-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          variant="outline"
          className="text-foreground bg-background hover:text-foreground hover:bg-muted h-9 w-40 rounded px-8 py-1 shadow-none transition-colors duration-200 hover:cursor-pointer"
          disabled={loading}
        >
          <span className="font-medium">Cerrar sesión</span>
        </Button>
      )}
    </form>
  );
}
