import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Pages, RoutesNav } from "@/constants/enums";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import type { User } from "@/types/user";
import {
  ChevronDown,
  LayoutGridIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import HeaderSidebar from "./Header";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAdmin, user } = useAuth();
  const location = useLocation();
  if (isAdmin() && location.pathname.startsWith(`/${RoutesNav.ADMIN}`)) {
    return <AdminSidebarLayout user={user!}>{children}</AdminSidebarLayout>;
  } else {
    return <>{children}</>;
  }
}

function AdminSidebarLayout({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar user={user} />
      <main className="w-full">
        <HeaderSidebar />
        {children}
      </main>
    </SidebarProvider>
  );
}

function AdminSidebar({ user }: { user: User }) {
  const links = {
    products: [
      {
        href: `/${RoutesNav.ADMIN}/${Pages.PRODUCTS}`,
        title: "منتجاتنا",
        icon: LayoutGridIcon,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.PRODUCT_CREATE}`,
        title: "إضافة منتج",
        icon: PlusIcon,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.PRODUCT_UPDATE}`,
        title: "تحديث منتج",
        icon: UploadCloud,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.PRODUCT_DELETE}`,
        title: "حذف منتج",
        icon: TrashIcon,
      },
    ],
    orders: [
      {
        href: `/${RoutesNav.ADMIN}/${Pages.ORDERS}`,
        title: "الطلبات",
        icon: LayoutGridIcon,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.ORDER_CREATE}`,
        title: "إضافة طلب",
        icon: PlusIcon,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.ORDER_UPDATE}`,
        title: "تحديث طلب",
        icon: UploadCloud,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.ORDER_DELETE}`,
        title: "حذف طلب",
        icon: TrashIcon,
      },
    ],
    discounts: [
      {
        href: `/${RoutesNav.ADMIN}/${Pages.DISCOUNTS}`,
        title: "الخصومات",
        icon: LayoutGridIcon,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.DISCOUNT_CREATE}`,
        title: "إضافة خصم",
        icon: PlusIcon,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.DISCOUNT_UPDATE}`,
        title: "تحديث خصم",
        icon: UploadCloud,
      },
      {
        href: `/${RoutesNav.ADMIN}/${Pages.DISCOUNT_DELETE}`,
        title: "حذف خصم",
        icon: TrashIcon,
      },
    ],
  };

  return (
    <Sidebar side="right" variant="floating">
      <SidebarHeader className="flex items-center flex-col">
        <h2 className="font-bold text-xl select-none">
          {user.first_name} {user.last_name}
        </h2>
        <p className="text-muted-foreground text-sm">{user.email}</p>
      </SidebarHeader>
      <SidebarContent className="select-none">
        <SidebarGroup>
          <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname === `/${RoutesNav.ADMIN}`}
                >
                  <Link to={`/${RoutesNav.ADMIN}`} className="mr-2">
                    الصفحة الرئيسية
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible className="group/collapsible" defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                المنتجات
                <ChevronDown className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                {links.products.map((link) => (
                  <SidebarMenu key={link.href}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={location.pathname === link.href}
                      >
                        <Link to={link.href} className="mr-2">
                          {link.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                ))}
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                الطلبات
                <ChevronDown className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                {links.orders.map((link) => (
                  <SidebarMenu key={link.href}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={location.pathname === link.href}
                      >
                        <Link to={link.href} className="mr-2">
                          {link.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                ))}
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                الخصومات
                <ChevronDown className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                {links.discounts.map((link) => (
                  <SidebarMenu key={link.href}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={location.pathname === link.href}
                      >
                        <Link to={link.href} className="mr-2">
                          {link.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                ))}
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
