import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import type { LinkProp } from ".";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Pages, RoutesNav } from "@/constants/enums";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import { LogoutButton } from "@/features/Auth/components/LogoutButtom";

interface Props {
  links: LinkProp[];
}

export default function MobileNav({ links }: Props) {
  const { isAuth, loading } = useAuth();
  const pathname = useLocation().pathname;
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger className={cn(buttonVariants({ variant: "secondary" }))}>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="container ">
          <ul className="flex flex-col gap-4 mt-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary transition",
                    link.href === pathname && "text-primary"
                  )}
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <SheetFooter>
            {loading ? (
              <span className="text-white">Loading...</span>
            ) : (
              !isAuth && (
                <a
                  href={`/${RoutesNav.AUTH}/${Pages.SIGNIN}`}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "block lg:hidden"
                  )}
                >
                  سجل الدخول
                </a>
              )
            )}
            {isAuth && <LogoutButton className="block lg:hidden" />}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
