import { Check } from "lucide-react";

const tasks = [
  "Finish project documentation",
  "Review saved links",
  "Prepare tomorrow's tasks",
];

export function TodayTasks() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Today</h2>

        <button className="text-xs text-muted-foreground hover:text-foreground">
          View all
        </button>
      </div>

      <div className="divide-y rounded-xl border">
        {tasks.map((task) => (
          <div key={task} className="flex items-center gap-3 p-3">
            <button className="flex size-4 shrink-0 items-center justify-center rounded-full border">
              <Check className="hidden size-3" />
            </button>

            <span className="text-sm">{task}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
