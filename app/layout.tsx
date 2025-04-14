import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "sonner";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reservas FII - Facultad de Ingeniería Industrial",
  description:
    "Sistema de reservas de laboratorios de la facultad de ingeniería industrial de la Universidad Tecnológica de Panamá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${interSans.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
