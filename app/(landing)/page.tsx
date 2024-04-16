import { MainNavigationMenu } from "@/components/navbar";
import Hero from "@/components/hero";
import { InputForm } from "@/components/form";
import { SignIn } from "@/components/sign-up";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MainNavigationMenu />
      <main className="flex-1">
        <div className="container relative">
          <Hero />
          <InputForm />
          <SignIn />
        </div>
      </main>
    </div>
  );
}
