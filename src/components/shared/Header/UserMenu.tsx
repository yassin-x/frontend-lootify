import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Pages, Role, RoutesNav } from "@/constants/enums";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import { cn } from "@/lib/utils";
import { Home, LogOut, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserMenu({
  className,
  align,
}: {
  className?: string;
  align?: "start" | "end" | "center";
}) {
  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    user && (
      <div className={cn("flex items-center gap-4", className)}>
        <DropdownMenu modal={false} dir="rtl">
          <DropdownMenuTrigger asChild className="cursor-pointer select-none">
            <Avatar>
              <AvatarFallback>{user.first_name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 border-border"
            align={align || "end"}
            forceMount
          >
            <DropdownMenuLabel className="font-normal text-center py-2">
              {`${user.first_name} ${user.last_name}`}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user.role === Role.ADMIN ? (
              <DropdownMenuItem>
                <Link
                  to={`/${RoutesNav.ADMIN}`}
                  className="flex items-center gap-2"
                >
                  <Home size={4} />
                  <span>لوحة التحكم</span>
                </Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                <Link
                  to={`/${RoutesNav.USER}/${Pages.PROFILE}`}
                  className="flex items-center gap-2"
                >
                  <Home size={4} />
                  <span>الصفحة الشخصية</span>
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <Link
                to={`/${RoutesNav.USER}/${Pages.ORDERS}`}
                className="flex items-center gap-2"
              >
                <ShoppingCart size={4} />
                <span>طلباتي</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleSignOut}
              className="cursor-pointer text-destructive"
            >
              <LogOut size={4} />
              <span>تسجيل الخروج</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  );
}
