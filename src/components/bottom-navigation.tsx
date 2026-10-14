import { CheckSquare, Folder, Home } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/tasks", label: "Tasks", icon: CheckSquare },
  { to: "/collections", label: "Collections", icon: Folder },
];

export function BottomNavigation() {
  return (
    <nav className="grid grid-cols-3 gap-1 items-center justify-center border-t px-2 w-full bg-background h-(--app-bh) fixed bottom-0">
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink key={to} to={to} end={end}>
          {({ isActive }) => (
            <Button
              className="flex-col h-auto py-2 w-full"
              variant={isActive ? "secondary" : "ghost"}
            >
              <Icon className="size-4 text-muted-foreground" />
              <span className="text-xs">{label}</span>
            </Button>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
