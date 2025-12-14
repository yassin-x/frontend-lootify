import { PublicRoute } from "@/components/shared/GuardRoute";
import { Pages } from "@/constants/enums";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <PublicRoute>
      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-bl-[200px]" />
          <div className="absolute inset-0 rounded-bl-[200px] bg-black/30">
            <div className="absolute left-20 top-10 z-10">
              <h2 className="font-extrabold text-2xl text-primary">
                لوتيفي كمبيوتر
              </h2>
            </div>
            <div className="absolute right-10 bottom-10 z-10">
              <Navbar />
            </div>
          </div>
        </div>
        {/* Left Side - Content Area */}
        <div className="flex-1 flex flex-col py-10">
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </PublicRoute>
  );
}

function Navbar() {
  const links = [
    { id: crypto.randomUUID(), title: "من نحن", href: `/${Pages.OUR_US}` },
    { id: crypto.randomUUID(), title: "تواصل معنا", href: `/${Pages.CONTACT}` },
    {
      id: crypto.randomUUID(),
      title: "سياسة الخصوصية",
      href: `/${Pages.PRIVACY}`,
    },
    {
      id: crypto.randomUUID(),
      title: "الشروط والأحكام",
      href: `/${Pages.TERMS}`,
    },
  ];
  return (
    <nav className="flex items-center justify-center space-x-6">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.href}
          className="text-white opacity-80 hover:opacity-100 hover:underline transition-opacity duration-200"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
