import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowToWork } from "@/components/howtowork";
import { HowItWorks } from "@/components/howitworks";

import { PricingGrid } from "@/components/pricing";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentIcon, Users, ChartNoAxesCombined } from "lucide-react";
import { Brain, Heart, Clock, Shield, Sparkles } from "lucide-react";


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
        title="Key Features"
        subtitle="Everything you need to manage volunteers effectively"
        items={[
          {
            icon: <Brain className="h-12 w-12 text-tertiary" />,
            title: "AI-Powered Matching",
            description: "Our advanced AI algorithms analyze skills, availability, and preferences to find the perfect match.",
          },
          {
            icon: <Users className="h-12 w-12 text-tertiary" />,
            title: "Smart Volunteer Pool",
            description: "Access a diverse pool of pre-screened volunteers with verified skills and experience.",
          },
          {
            icon: <Heart className="h-12 w-12 text-tertiary" />,
            title: "Impact Tracking",
            description: "Measure and showcase the impact of your volunteer programs with detailed analytics.",
          },
          {
            icon: <Clock className="h-12 w-12 text-tertiary" />,
            title: "Time-Saving Tools",
            description: "Automated scheduling, communication, and management tools to streamline operations.",
          },
          {
            icon: <Shield className="h-12 w-12 text-tertiary" />,
            title: "Secure Platform",
            description: "Enterprise-grade security with verified profiles and secure communication channels.",
          },
          {
            icon: <Sparkles className="h-12 w-12 text-tertiary" />,
            title: "Smart Recommendations",
            description: "Get personalized recommendations for volunteer opportunities based on your needs.",
          },
        ]}
      />

      <div id="pricing" />
      {/* <PricingGrid
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
      /> */}
    </>
  );
}
