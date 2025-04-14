import { LoginForm } from "./login-form";
import { LoginTOS } from "./login-tos";

export function LoginButton() {
  return (
    <div className="flex flex-col items-center gap-2">
      <LoginForm />
      <LoginTOS />
    </div>
  );
}
