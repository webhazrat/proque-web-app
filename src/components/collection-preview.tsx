import { ChevronRight, Folder } from "lucide-react";

const collections = [
  {
    name: "Development",
    count: 12,
  },
  {
    name: "Resources",
    count: 8,
  },
  {
    name: "Ideas",
    count: 5,
  },
];

export function CollectionsPreview() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Collections</h2>

        <button className="text-xs text-muted-foreground hover:text-foreground">
          View all
        </button>
      </div>

      <div className="space-y-1">
        {collections.map((collection) => (
          <button
            key={collection.name}
            className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-muted"
          >
            <Folder className="size-4 text-muted-foreground" />

            <span className="flex-1 text-sm">{collection.name}</span>

            <span className="text-xs text-muted-foreground">
              {collection.count}
            </span>

            <ChevronRight className="size-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </section>
  );
}
