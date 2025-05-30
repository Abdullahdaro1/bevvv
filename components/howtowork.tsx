import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";


export function HowToWork(props: {
    title: string;
    description: string;
    photo: string;
}) {
  return (
    <section className="flex items-center justify-center min-h-[600px] bg-foreground rounded-[30px] my-8 px-8 py-12">
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl gap-12">
        {/* Text Section */}
        <div className="flex-1 text-background flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{props.title}</h2>
          <p className="text-lg mb-2">{props.description}</p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img src={props.photo} alt="How it works" className="rounded-lg object-cover w-[600px] h-[400px] shadow-lg" />
        </div>
      </div>
    </section>
  );
}
