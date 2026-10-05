import "./App.css";
import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { CollectionsPreview } from "@/components/collection-preview";
import { QuickActions } from "@/components/quick-actions";
import { TodayTasks } from "@/components/today-tasks";
import { TabsDemo } from "./components/tabs";

function App() {
  return (
    <div className="flex min-h-screen px-[calc(max(0px, (100vw - 640px) / 2))] flex-col bg-background text-foreground">
      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        <AppHeader />

        <section className="space-y-1">
          <p className="text-xs text-muted-foreground">Good evening</p>

          <h2 className="text-xl font-semibold tracking-tight">
            What do you want to do?
          </h2>
        </section>

        <QuickActions />

        <TodayTasks />

        <CollectionsPreview />
      </div>

      <div className="shrink-0 p-4">
        <TabsDemo />
      </div>

      <div className="shrink-0 pb-2">
        <BottomNavigation />
      </div>
    </div>
  );
}

export default App;
