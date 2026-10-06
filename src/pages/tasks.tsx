import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";

export function Tasks() {
  return (
    <div className="min-h-screen px-[calc(max(0px, (100vw - 640px) / 2))] bg-background text-foreground pb-(--app-bh)">
      <AppHeader />

      <BottomNavigation />
    </div>
  );
}
