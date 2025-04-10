import Header from "@/components/(root)/Header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login/`);

  return (
    <div>
      <Header />
    </div>
  );
}
