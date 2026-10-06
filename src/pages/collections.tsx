import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { SwipeDrawer } from "@/components/swipe-drawer";
import { Button } from "@/components/ui/button";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Folder, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Collections() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="min-h-screen px-[calc(max(0px, (100vw - 640px) / 2))] bg-background text-foreground pb-(--app-bh)">
      <AppHeader />

      <SwipeDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        title="Create Collection"
        description="Keep related links and notes together."
      >
        <div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
      </SwipeDrawer>

      <div className="space-y-6 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium mb-1">My Collections</h2>
              <p className="text-xs text-muted-foreground">
                4 spaces for your ideas
              </p>
            </div>

            <Button onClick={() => setOpenDrawer(true)}>
              <Plus data-icon="inline-start" /> New
            </Button>
          </div>
          <div>
            <InputGroup>
              <InputGroupInput
                placeholder="Search Collections"
                className="placeholder:text-xs"
              />
              <InputGroupAddon align="inline-start">
                <Search />
              </InputGroupAddon>
            </InputGroup>
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
      </div>

      <BottomNavigation />
    </div>
  );
}
