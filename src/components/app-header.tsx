import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-sm font-semibold tracking-tight">Proque</h1>
      </div>

      <Button variant="ghost" size="icon" className="size-8 rounded-lg">
        <Settings className="size-4" />
        <span className="sr-only">Settings</span>
      </Button>
    </header>
  );
}
