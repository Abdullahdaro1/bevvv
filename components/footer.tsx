import { buttonVariants } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Play } from 'lucide-react';
import applystore from '../assets/applystore.svg'
import Image from "next/image";

import Link from "next/link";
import { Logo } from "./logo";

export function Footer(props: {
  builtBy: string;
  builtByLink: string;
  githubLink: string;
  twitterLink: string;
  linkedinLink: string;
}) {
  return (
    <footer className="border-t">
{/*       // first part  */}
      <div className="container flex flex-col items-center justify-between bg-current gap-4 px-20 py-12 rounded-[20px] md:flex-row md:gap-2">
        <div className="flex items-center gap-8">
          <div className="rounded-sm text-background text-[24px]"><Logo /></div>
          <div>
            <p className="text-background text-[24px]">Find a volunteer or project<br /> quickly and conveniently</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="text-sm text-background">The app is coming soon to the following stores<br className="md:hidden" />
            <div className="flex gap-3 py-2">
              <Play className="border-background" /><Image className="bg-background dark:bg-white rounded-xl" src={applystore} alt="applestore" /> 
            </div>
          </div>
        </div>
      </div>
      {/* //Second part */} 
      <div className="container text-gray-700 px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2 text-[18px]">Get started</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Sign up</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-[18px]">About us</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Company information</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-[18px]">Support</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Help desk</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-[18px]">Legal</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={props.builtByLink}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {props.builtBy}
            </a>
{/*             <a
              href={props.githubLink}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a> */}
          </p>
        </div>

        <div className="flex items-center space-x-1">
          {(
            [
              { href: props.twitterLink, icon: TwitterLogoIcon },
              { href: props.linkedinLink, icon: LinkedInLogoIcon },
              { href: props.githubLink, icon: GitHubLogoIcon },
            ] as const
          ).map((link, index) => (
            <Link
              href={link.href}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              key={index}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
