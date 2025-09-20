import { Hero } from "@/components/hero";
import { hasEnvVars } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5 text-center">
          <Hero />
          <main className="flex-1 flex flex-col">
            {!hasEnvVars ? <p>Sign up now!</p> : <p>Thanks for signing up</p>}
            <p></p>
          </main>

        </div>

      </div>
    </main>
  );
}
