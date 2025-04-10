import { signOut } from "@/lib/auth";
import Logo from "../Logo";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b bg-white px-16 py-2">
      <Logo size="small" />

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button
          type="submit"
          variant="outline"
          className="h-fit rounded px-16 py-1 shadow-none hover:cursor-pointer"
        >
          Cerrar sesión
        </Button>
      </form>
    </header>
  );
}
