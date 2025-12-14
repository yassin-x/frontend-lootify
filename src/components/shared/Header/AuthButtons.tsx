import { buttonVariants } from "@/components/ui/button";
import { Pages, RoutesNav } from "@/constants/enums";
import { cn } from "@/lib/utils";

export default function AuthButtons() {

  return (
    <a
      href={`/${RoutesNav.AUTH}/${Pages.SIGNIN}`}
      className={cn(buttonVariants({ variant: "default" }), "hidden lg:block")}
    >
      سجل الدخول
    </a>
  );
}
