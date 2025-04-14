import { Application } from "@/components/(root)/Application";
import { Header } from "@/components/(root)/header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login/`);

  return (
    <>
      <Header />
      <Application />
    </>
  );
}
