import { createClient } from "@/lib/supabase/server";

export async function Hero() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return user ? (
    <p>Hello {user.email}</p>
  ) : (
    <h1 className="text-3xl md:text-5xl font-bold">Welcome to this website</h1>
  );
}
