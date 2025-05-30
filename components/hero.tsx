import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-background p-2">
      <div className="flex justify-center items-center h-[180px] flex-col rounded-md p-6 gap-4">
        {props.icon}
        <div className="space-y-2 flex flex-col items-center">
          <h3 className="font-bold">{props.title}</h3>
          <p className="text-sm text-center text-muted-foreground">{props.description}</p>
        </div>
      </div>
    </div>
  );
}


export function Hero(props: {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  SearchBar: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}) {
  return (
    <section className="space-y-6 py-32 md:py-48 lg:py-52">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        {/*<Link
          href={props.capsuleLink}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          {props.capsuleText}
        </Link> */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl">
          {props.title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {props.SearchBar}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href={props.primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {props.primaryCtaText}
          </Link>
          {/* <Link
            href={props.secondaryCtaLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {props.secondaryCtaText}
          </Link> */}
        </div>

        {/*   {props.credits && (
          <p className="text-sm text-muted-foreground mt-4">{props.credits}</p>
        )} */}

      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {props.items.map((item, index) => (
          <FeatureGridItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
