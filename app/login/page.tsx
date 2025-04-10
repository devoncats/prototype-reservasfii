import Logo from "@/components/Logo";
import LoginButton from "@/components/login/LoginButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`);

  return (
    <main className="flex h-dvh w-full items-center justify-center">
      <Card className="rounded shadow-none">
        <CardHeader className="flex justify-center">
          <Logo />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold">
              Ingresa sesión a tu usuario
            </h2>
            <p className="caption">
              Utiliza tu correo institucional para ingresar al sistema
            </p>
          </div>

          <LoginButton />
        </CardContent>
      </Card>
    </main>
  );
}
