import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import { Pages, RoutesNav } from "@/constants/enums";
import MobileNav from "./MobileNav";
import {
  ActivityIcon,
  HomeIcon,
  LayoutGridIcon,
  type LucideProps,
} from "lucide-react";

export interface LinkProp {
  href: string;
  title: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export default function Header() {
  const links: LinkProp[] = [
    {
      href: RoutesNav.ROOT,
      title: "الصفحة الرئيسية",
      icon: HomeIcon,
    },
    {
      href: `/${Pages.OUR_US}`,
      title: "من نحن",
      icon: ActivityIcon,
    },
    {
      href: `/${Pages.PRODUCTS}`,
      title: "منتجاتنا",
      icon: LayoutGridIcon,
    },
  ];

  return (
    <header className="p-2 w-full">
      <div className="flex items-center justify-between container border-b p-2">
        <div className="flex items-center gap-4">
          <h2 className="bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-2xl font-extrabold text-transparent select-none">
            لوتيفي كمبيوتر
          </h2>
          <Nav links={links} />
        </div>
        <div className="flex items-center gap-2">
          <MobileNav links={links} />
          <Button className="hidden lg:block">سجل الدخول</Button>
          <Button variant="outline">إتصل بنا</Button>
        </div>
      </div>
    </header>
  );
}
