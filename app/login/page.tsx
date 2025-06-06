// app/login/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function LoginPage() {
  return (
    <>
    <LandingPageHeader />
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Sign in with GitHub or Google as a Volunteer or Organization.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-4 px-6 py-4">
          {/* Volunteer button calls the “google‐volunteer” provider */}
          <Button
            onClick={() =>
              signIn("google-volunteer", {
                callbackUrl: "/volunteer-dashboard",
              })
            }
            className="w-full"
          >
            Google → Volunteer
          </Button>

          {/* Organization button calls the “google‐organization” provider */}
          <Button
            onClick={() =>
              signIn("google-organization", {
                callbackUrl: "/organization-dashboard",
              })
            }
            className="w-full"
          >
            Google → Organization
          </Button>
        </CardFooter>
      </Card>
    </div>
    </>
  );
}
