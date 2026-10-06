import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";
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
import { EllipsisVertical, FileText, Link, Plus, Search } from "lucide-react";

export function Collection() {
  return (
    <div className="min-h-screen px-[calc(max(0px, (100vw - 640px) / 2))] bg-background text-foreground pb-(--app-bh)">
      <AppHeader />

      <div className="space-y-6 overflow-y-auto p-4">
        <div className="space-y-4">
          <Item>
            <ItemContent>
              <ItemTitle className="text-[16px]">Web Development</ItemTitle>
              <ItemDescription className="text-xs mt-1 flex gap-3">
                <span>12 items</span> - <span>Updated today</span>
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button>
                <Plus /> Add item
              </Button>
            </ItemActions>
          </Item>

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

          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-medium">Items</h2>
              <Button variant="link" size="sm">
                <Plus /> Add current page
              </Button>
            </div>
            <ItemGroup className="gap-2">
              <Item>
                <ItemMedia variant="icon">
                  <Link className="text-purple-500" />
                </ItemMedia>
                <ItemContent>
                  <span className="uppercase text-[11px] text-muted-foreground">
                    Link
                  </span>
                  <ItemTitle>Web Development</ItemTitle>
                  <ItemDescription className="text-xs mt-1">
                    <span>Added 5 Oct, 2026</span>
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button size="icon" variant="ghost">
                    <EllipsisVertical />
                  </Button>
                </ItemActions>
              </Item>

              <Item>
                <ItemMedia variant="icon">
                  <FileText className="text-purple-500" />
                </ItemMedia>
                <ItemContent>
                  <span className="uppercase text-[11px] text-muted-foreground">
                    Rich Text
                  </span>
                  <ItemTitle>Web Development</ItemTitle>
                  <ItemDescription className="text-xs mt-1">
                    <span>Added 5 Oct, 2026</span>
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button size="icon" variant="ghost">
                    <EllipsisVertical />
                  </Button>
                </ItemActions>
              </Item>
            </ItemGroup>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
