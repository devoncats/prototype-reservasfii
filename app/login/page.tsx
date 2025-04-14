import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginCard } from "@/components/login/login-card";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`);

  return (
    <main className="from-background to-background/30 flex h-dvh items-center justify-center bg-gradient-to-br">
      <LoginCard />
    </main>
  );
}
