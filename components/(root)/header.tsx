import { Logo } from "../logo";
import { LogoutForm } from "./logout-form";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b bg-white px-16 py-2">
      <Logo size="small" />

      <LogoutForm />
    </header>
  );
}
