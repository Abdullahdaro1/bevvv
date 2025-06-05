import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
      // GitHub provider (remove if you don’t need it)
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
  
      // Google provider
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
          },
        },
      }),
    ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    // ───────────────────────────────────────────────────────────
    // 1) signIn: runs on the *initial* login (when user just clicked “Sign in with Google/GitHub”)
    //    → we upsert the `User` row in Prisma here.
    //    If this returns `false`, sign-in fails.
    //    If it returns `true`, NextAuth proceeds to issue a JWT cookie.
    async signIn({ user }) {
      // `user.email` should exist if Google/GitHub returned an email. If not, reject.
      if (!user.email) {
        return false;
      }

      try {
        // Upsert user in our own `User` table (create if missing, otherwise update).
        // We use `user.email` as the unique key.
        await prisma.user.upsert({
          where: { email: user.email },
          create: {
            email: user.email,
            name: user.name ?? undefined,
            image: user.image ?? undefined,
            // Default role on first sign-in:
            role: "VOLUNTEER",
          },
          update: {
            // If they changed their name or avatar on Google/GitHub, keep us in sync:
            name: user.name,
            image: user.image,
          },
        });
        return true;
      } catch (e) {
        console.error("Error upserting user in signIn:", e);
        return false;
      }
    },

    // ───────────────────────────────────────────────────────────
    // 2) jwt: whenever a JWT is created (first login) or updated (subsequent requests).
    //    On first login, `user` will be the newly-created user record
    //    (technically, NextAuth passes you the entire user object whenever it’s just been created).
    async jwt({ token, user }) {
      if (user) {
        // Look up the user’s `role` enum from the database:
        try {
          const dbUser = await prisma.user.findUnique({
            where: { email: user.email! },
            select: { role: true },
          });
          token.role = dbUser?.role ?? "VOLUNTEER";
        } catch (e) {
          console.error("Error fetching user role in jwt callback:", e);
          token.role = "VOLUNTEER";
        }
      }
      return token;
    },

    // ───────────────────────────────────────────────────────────
    // 3) session: each time NextAuth returns the session object to the client.
    //    We copy `token.role → session.user.role` so that on the client you can do `session.user.role`.
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
})