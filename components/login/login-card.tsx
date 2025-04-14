import { Logo } from "@/components/logo";
import { LoginButton } from "@/components/login/login-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginTitle } from "./login-title";

export async function LoginCard() {
  return (
    <Card className="bg-card text-card-foreground gap-0 shadow-none">
      <CardHeader className="flex justify-center">
        <Logo />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-8 pb-0">
        <LoginTitle />
        <LoginButton />
      </CardContent>
    </Card>
  );
}
