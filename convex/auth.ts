import GitHub from "@auth/core/providers/github";
import Resend from "@auth/core/providers/resend";
import Google from "@auth/core/providers/google";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [
    GitHub, 
    Google,
    Resend({
      from: process.env.AUTH_EMAIL ?? "Hireme <support@resend.dev>",
    })
  ],
});
