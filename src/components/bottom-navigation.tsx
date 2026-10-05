import { CheckSquare, Folder, Home, Notebook } from "lucide-react";

export function BottomNavigation() {
  return (
    <nav className="grid grid-cols-4 border-t pt-2">
      <button className="flex flex-col items-center gap-1 py-2 text-foreground">
        <Home className="size-4" />
        <span className="text-[11px]">Home</span>
      </button>

      <button className="flex flex-col items-center gap-1 py-2 text-muted-foreground">
        <CheckSquare className="size-4" />
        <span className="text-[11px]">Tasks</span>
      </button>

      <button className="flex flex-col items-center gap-1 py-2 text-muted-foreground">
        <Folder className="size-4" />
        <span className="text-[11px]">Collections</span>
      </button>

      <button className="flex flex-col items-center gap-1 py-2 text-muted-foreground">
        <Notebook className="size-4" />
        <span className="text-[11px]">Notes</span>
      </button>
    </nav>
  );
}
