import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface Props {
  title: string;
  subTitle: string;
}

export default function MainSection({ title, subTitle }: Props) {
  return (
    <section className="section-gap container">
      <div className="relative flex flex-col items-center justify-center text-center py-28 bg-linear-to-b from-[#0f172a] to-[#1e293b] rounded-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />
        <h1 className="relative z-10 text-4xl font-bold text-primary">
          {title}
        </h1>
        <p className="relative z-10 mt-4 text-muted-foreground max-w-xl">
          {subTitle}
        </p>
        <a
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "mt-4 z-10")}
        >
          العودة للرئيسية
        </a>
      </div>
    </section>
  );
}
