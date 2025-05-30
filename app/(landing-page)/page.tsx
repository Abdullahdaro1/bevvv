import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowToWork } from "@/components/howtowork";
import { HowItWorks } from "@/components/howitworks";

import { PricingGrid } from "@/components/pricing";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentIcon, Users, ChartNoAxesCombined } from "lucide-react";

export default async function IndexPage() {

  return (
    <>
      <Hero
        capsuleText=""
        capsuleLink="https://stacktemplate.com"
        title="The place where volunteers meet"
        subtitle="Built for volunteers, by volunteers"
        SearchBar="Search for a volunteer"
        primaryCtaText="Get Started"
        primaryCtaLink={"/signup"}
        secondaryCtaText="GitHub"
        secondaryCtaLink="https://github.com/stack-auth/stack-template"
        credits={
          <>

          </>
        }
        items={[
          {
            icon: (
              <svg viewBox="0 0 24 24" className="h-10 w-10 fill-tertiary">
                <path d="M12 2C12.28 2 12.56 2.07 12.8 2.21l7 4.06c.37.21.6.6.6 1.03v5.34c0 5.05-3.4 9.74-8.06 11.29a1.01 1.01 0 0 1-.68 0C5 22.38 1.6 17.69 1.6 12.64V7.3c0-.43.23-.82.6-1.03l7-4.06A1.2 1.2 0 0 1 12 2zm0 2.18L5.6 7.3v5.34c0 4.13 2.8 8.01 6.4 9.29 3.6-1.28 6.4-5.16 6.4-9.29V7.3L12 4.18z"/>
              </svg>
            ),
            title: "Security",
            description:
              "Safely We offer only verified profiles.",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" className="h-10 w-10 fill-tertiary">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13h-1v6l5.25 3.15.5-.86-4.75-2.79V7z" />
              </svg>
            ),
            title: "Save your time",
            description: "See your candidates so quickly",
          },
          {
            icon: <ChartNoAxesCombined className="h-10 w-10 text-tertiary" />,
            title: "Filter your data in seconds",
            description: "Quickly find the right volunteers",
          },
        ]}
      />

      <HowToWork
        title="Why Bev?"
        description="This is a feature that will help you find reliable volunteers."
        photo="https://img.freepik.com/free-photo/medium-shot-volunteers-with-donations_23-2149182022.jpg?semt=ais_hybrid&w=740"
      />

      <HowItWorks
        title="How it works?"
        description="This is a feature that will help you find reliable volunteers."
        number1="1"
        number2="2"
        number3="3"
        title1="Create a free account"
        title2="Create a free account"
        title3="Create a free account"
      />

      <div id="features" />
      <FeatureGrid
        title="Features"
        subtitle="Unlock powerful capabilities for your project."
        items={[
          {
            icon: (
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12 2C12.28 2 12.56 2.07 12.8 2.21l7 4.06c.37.21.6.6.6 1.03v5.34c0 5.05-3.4 9.74-8.06 11.29a1.01 1.01 0 0 1-.68 0C5 22.38 1.6 17.69 1.6 12.64V7.3c0-.43.23-.82.6-1.03l7-4.06A1.2 1.2 0 0 1 12 2zm0 2.18L5.6 7.3v5.34c0 4.13 2.8 8.01 6.4 9.29 3.6-1.28 6.4-5.16 6.4-9.29V7.3L12 4.18z"/>
              </svg>
            ),
            title: "Next.js 14",
            description:
              "Utilize the latest features: App Router, Layouts, Suspense.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-12 w-12 fill-current"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="22"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="22"
                ></line>
              </svg>
            ),
            title: "Shadcn UI",
            description:
              "Modern and fully customizable UI components based on Tailwind CSS.",
          },
          {
            icon: (
              <svg
                width="201"
                height="242"
                viewBox="0 0 201 242"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-current"
              >
                <path d="M104.004 1.78785C101.751 0.662376 99.1002 0.663161 96.8483 1.78998L4.9201 47.7892C2.21103 49.1448 0.5 51.9143 0.5 54.9436V130.526C0.5 133.556 2.2123 136.327 4.92292 137.682L96.9204 183.67C99.1725 184.796 101.823 184.796 104.075 183.67L168.922 151.246C174.242 148.587 180.5 152.455 180.5 158.402V168.855C180.5 171.885 178.788 174.655 176.078 176.01L104.077 212.011C101.825 213.137 99.1745 213.137 96.9224 212.012L12.0771 169.598C6.75791 166.939 0.5 170.807 0.5 176.754V187.048C0.5 190.083 2.21689 192.856 4.93309 194.209L97.0051 240.072C99.2529 241.191 101.896 241.191 104.143 240.07L196.071 194.21C198.785 192.857 200.5 190.084 200.5 187.052V119.487C200.5 113.54 194.242 109.672 188.922 112.332L132.078 140.754C126.758 143.414 120.5 139.546 120.5 133.599V123.145C120.5 120.115 122.212 117.345 124.922 115.99L196.078 80.4124C198.788 79.0573 200.5 76.2872 200.5 73.257V54.9468C200.5 51.9158 198.787 49.1451 196.076 47.7904L104.004 1.78785Z" />
              </svg>
            ),
            title: "Stack Auth",
            description:
              "Comprehensive Authentication: OAuth, User Management, and more.",
          },
          {
            icon: <Users className="h-12 w-12" />,
            title: "Multi-tenancy & RBAC",
            description: "Built-in Teams and Permissions.",
          },
          {
            icon: <GitHubLogoIcon className="h-12 w-12" />,
            title: "100% Open-source",
            description: "Open-source and self-hostable codebase.",
          },
          {
            icon: <ComponentIcon className="h-12 w-12" />,
            title: "Modular Design",
            description: "Easily extend and customize. No spaghetti code.",
          },
        ]}
      />

      <div id="pricing" />
      <PricingGrid
        title="Pricing"
        subtitle="Flexible plans for every team."
        items={[
          {
            title: "Basic",
            price: "Free",
            description: "For individuals and small projects.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Get Started",
            buttonHref: "/signup",
          },
          {
            title: "Pro",
            price: "$0.00",
            description: "Ideal for growing teams and businesses.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Upgrade to Pro",
            isPopular: true,
            buttonHref: "/signup",
          },
          {
            title: "Enterprise",
            price: "Still Free",
            description: "For large organizations.",
            features: [
              "Full source code",
              "100% Open-source",
              "Community support",
              "Free forever",
              "No credit card required",
            ],
            buttonText: "Contact Us",
            buttonHref: "/signup",
          },
        ]}
      />
    </>
  );
}
