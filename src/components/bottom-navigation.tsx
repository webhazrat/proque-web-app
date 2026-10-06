import { CheckSquare, Folder, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function BottomNavigation() {
  return (
    <nav className="grid grid-cols-3 gap-1 items-center justify-center border-t px-2 w-full bg-background h-(--app-bh) fixed bottom-0">
      <Link to="/">
        <Button className="flex-col h-auto py-2 w-full" variant="secondary">
          <Home size={16} />
          <span className="text-xs">Home</span>
        </Button>
      </Link>

      <Link to="/tasks">
        <Button
          className="flex-col h-auto py-2 w-full text-muted-foreground"
          variant="ghost"
        >
          <CheckSquare size={16} />
          <span className="text-xs">Tasks</span>
        </Button>
      </Link>

      <Link to="/collections">
        <Button
          className="flex-col h-auto py-2 w-full text-muted-foreground"
          variant="ghost"
        >
          <Folder size={16} />
          <span className="text-xs">Collections</span>
        </Button>
      </Link>
    </nav>
  );
}
