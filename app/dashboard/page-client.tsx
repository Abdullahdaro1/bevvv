"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export function PageClient() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If we have a session, redirect to the user's dashboard
  if (session?.user) {
    router.push(`/dashboard/${session.user.id}`);
  }

  return null;
}
