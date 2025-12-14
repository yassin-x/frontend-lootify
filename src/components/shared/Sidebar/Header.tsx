import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";

export default function HeaderSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="pt-4 w-full container">
      <div className="bg-sidebar w-full mx-auto p-2 rounded-xl border-sidebar-border border">
        <Button onClick={toggleSidebar} variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
}
