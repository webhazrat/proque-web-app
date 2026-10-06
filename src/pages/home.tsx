import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
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
    <div className="min-h-screen px-[calc(max(0px, (100vw - 640px) / 2))] bg-background text-foreground pb-(--app-bh)">
      <AppHeader />
      <div className="space-y-6 overflow-y-auto p-4">
        <section className="space-y-1">
          <p className="text-xs text-muted-foreground">Tuesday, October 2026</p>

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

        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-medium mb-2">Recent Collections</h2>
            <Link to="/collections">
              <Button variant="ghost" size="xs" className="text-purple-500">
                View all <ChevronRight data-icon="inline-end" />
              </Button>
            </Link>
          </div>
          <ItemGroup className="gap-2">
            <Item
              variant="outline"
              render={
                <Link to="/collection/123">
                  <ItemMedia variant="icon">
                    <Folder className="text-purple-500" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Web Development</ItemTitle>
                    <ItemDescription className="text-xs mt-1 flex gap-3">
                      <span>12 items</span> - <span>Updated today</span>
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Plus size={16} />
                  </ItemActions>
                </Link>
              }
            />

            <Item
              variant="outline"
              render={
                <Link to="/collection/123">
                  <ItemMedia variant="icon">
                    <Folder className="text-purple-500" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Design Inspiration</ItemTitle>
                    <ItemDescription className="text-xs mt-1 flex gap-3">
                      <span>12 items</span> - <span>Updated today</span>
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Plus size={16} />
                  </ItemActions>
                </Link>
              }
            />

            <Item
              variant="outline"
              render={
                <Link to="/collection/123">
                  <ItemMedia variant="icon">
                    <Folder className="text-purple-500" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>Rearch Documents References</ItemTitle>
                    <ItemDescription className="text-xs mt-1 flex gap-3">
                      <span>12 items</span> - <span>Updated today</span>
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Plus size={16} />
                  </ItemActions>
                </Link>
              }
            />
          </ItemGroup>
        </div>

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

      <BottomNavigation />
    </div>
  );
}
