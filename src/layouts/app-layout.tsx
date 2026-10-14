import { Outlet, useLocation } from "react-router-dom";
import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";

export function AppLayout() {
  const location = useLocation();

  const hideLayout = location.pathname === "/login";

  if (hideLayout) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen px-[calc(max(0px, (100vw - 640px) / 2))] bg-background text-foreground pb-(--app-bh)">
      <AppHeader />

      <main className="min-w-0 flex-1">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}
