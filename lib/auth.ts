import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Volunteer Google provider
    GoogleProvider({
      id: "google-volunteer",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
    }),
    // Organization Google provider
    GoogleProvider({
      id: "google-organization",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email) return false;
      // Determine role by inspecting account.provider
      let role: "VOLUNTEER" | "ORGANIZATION" = "VOLUNTEER";
      if (account.provider === "google-organization") {
        role = "ORGANIZATION";
      }
      try {
        await prisma.user.upsert({
          where: { email: user.email },
          create: {
            email: user.email,
            name: user.name ?? undefined,
            image: user.image ?? undefined,
            role,
          },
          update: {
            name: user.name,
            image: user.image,
            role,
          },
        });
        return true;
      } catch (error) {
        console.error("Error upserting user:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { role: true },
        });
        token.role = dbUser?.role ?? "VOLUNTEER";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});