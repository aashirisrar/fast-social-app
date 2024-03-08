"use client";
import { MainNavigationMenu } from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MainNavigationMenu />
      <main className="flex-1">
        <div className="container relative">
          <Hero />
        </div>
      </main>
    </div>
  );
}
