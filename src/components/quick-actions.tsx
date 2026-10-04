import { Link, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <section className="grid grid-cols-2 gap-2">
      <Button
        variant="outline"
        className="h-20 flex-col items-start justify-between rounded-xl p-3"
      >
        <Plus className="size-4" />

        <span className="text-xs font-medium">New Note</span>
      </Button>

      <Button
        variant="outline"
        className="h-20 flex-col items-start justify-between rounded-xl p-3"
      >
        <Link className="size-4" />

        <span className="text-xs font-medium">Save Link</span>
      </Button>
    </section>
  );
}
