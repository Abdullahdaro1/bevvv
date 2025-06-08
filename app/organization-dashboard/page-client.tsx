"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function PageClient() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });

  console.log(session);

  useEffect(() => {
    if (session?.user) {
      router.push(`/organization-dashboard/${session.user.id}`);
    }
  }, [session, router]);

  if (status === "loading") {
    return <div>Loading... organization</div>;
  }

  return null;
}

export default PageClient;
