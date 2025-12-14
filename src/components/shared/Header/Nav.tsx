import { useLocation } from "react-router-dom";
import type { LinkProp } from ".";
import { cn } from "@/lib/utils";

interface Props {
  links: LinkProp[];
}

export default function Nav({ links }: Props) {
  const pathname = useLocation().pathname;
  return (
    <nav className="hidden lg:block">
      <li className="flex items-center gap-2">
        {links.map((link, index) => {
          return (
            <ul key={index} className="select-none">
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  link.href === pathname
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.title}
              </a>
            </ul>
          );
        })}
      </li>
    </nav>
  );
}
