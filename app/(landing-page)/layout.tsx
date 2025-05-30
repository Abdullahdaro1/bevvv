import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "", href: "/" },
          { title: "", href: "/#features" },
          { title: "", href: "/#pricing" },
          { title: "", href: "https://github.com/stack-auth/stack-template", external: true },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Bev Team"
        builtByLink="https://bev.com"
        githubLink=""
        twitterLink=""
        linkedinLink=""
      />
    </div>
  );
}
