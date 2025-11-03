import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import type { LinkProp } from ".";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface Props {
  links: LinkProp[];
}

export default function MobileNav({ links }: Props) {
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
                    "flex items-center gap-3 text-lg font-medium text-white hover:text-green-400 transition",
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
            <Button className="w-full">سجل الدخول</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
