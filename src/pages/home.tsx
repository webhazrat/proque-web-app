import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { initialCollections } from "@/lib/mockData";
import {
  ChevronRight,
  Circle,
  Clock,
  Folder,
  Plus,
  Square,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="space-y-6 overflow-y-auto p-4">
        <section className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Tuesday, 13 October 2026
          </p>

          <h2 className="text-2xl font-semibold tracking-tight">
            Good evening, <strong className="text-purple-500">Hazrat</strong>
          </h2>
          <p className="text-xs text-muted-foreground">
            Here's what needs your attention today.
          </p>
        </section>

        <div>
          <h2 className="font-medium mb-2">Today's reminder</h2>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase text-gray-400">Up Next</span>
                <Badge variant="destructive">
                  <Circle data-icon="inline-start" />
                  Processing
                </Badge>
              </div>
              <CardTitle>Finish website UI</CardTitle>
              <CardDescription>
                <p className="text-xs">Proque Project</p>
                <div className="flex items-center gap-4 mt-4 text-xs">
                  <p className="flex items-center gap-1">
                    <Clock size={14} /> Today 7:00 PM{" "}
                  </p>{" "}
                  <p className="text-destructive flex gap-1">
                    <Square size={14} /> High
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="font-medium mb-2">Recent Collections</h2>
              <Link to="/collections">
                <Button variant="ghost" size="xs" className="text-purple-500">
                  View all <ChevronRight data-icon="inline-end" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <ItemGroup className="gap-0">
              {initialCollections.slice(0, 3).map((collection) => (
                <Item
                  key={collection.id}
                  render={
                    <Link to={`/collection/${collection.id}`}>
                      <ItemMedia variant="icon">
                        <Folder className="text-purple-500" />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{collection.title}</ItemTitle>
                        <ItemDescription className="text-xs mt-1 flex gap-3">
                          <span>{collection.items.length} items</span> -{" "}
                          <span>Updated {collection.updatedAt}</span>
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <ChevronRight className="size-4" />
                      </ItemActions>
                    </Link>
                  }
                />
              ))}
            </ItemGroup>
          </CardContent>
        </Card>

        <div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">
              <Plus data-icon="inline-start" /> New Task
            </Button>
            <Button variant="outline">
              <Plus data-icon="inline-start" /> New Collection
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
