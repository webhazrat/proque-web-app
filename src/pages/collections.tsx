import { AppHeader } from "@/components/app-header";
import { BottomNavigation } from "@/components/bottom-navigation";
import { SwipeDrawer } from "@/components/swipe-drawer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { initialCollections } from "@/lib/mockData";
import {
  ChevronRight,
  Dot,
  EllipsisVertical,
  FileText,
  Folder,
  Link2,
  PencilLine,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Collections() {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <SwipeDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        title="Create Collection"
        description="Keep related links and notes together."
      >
        <div className="">
          <FieldGroup>
            <Field>
              <Label>Title</Label>
              <Input />
            </Field>
            <Field>
              <Label>Description</Label>
              <Textarea />
            </Field>
            <Button>Create</Button>
          </FieldGroup>
        </div>
      </SwipeDrawer>

      <div className="space-y-6 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium mb-1">My Collections</h2>
              <p className="text-xs text-muted-foreground">
                {initialCollections.length} spaces for your ideas
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
            {initialCollections.map((collection) => (
              <Item
                onClick={() => navigate(`/collection/${collection.id}`)}
                variant="outline"
                key={collection.id}
                className="cursor-pointer"
              >
                <ItemMedia variant="icon">
                  <Folder className="text-purple-500" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{collection.title}</ItemTitle>
                  <ItemDescription className="text-xs truncate max-w-50">
                    {collection.description}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <EllipsisVertical />
                        </Button>
                      }
                    />
                    <DropdownMenuContent className="w-30" align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <ChevronRight className="size-3.5" /> Open
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <PencilLine className="size-3.5" /> Edit
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                          <Trash2 className="size-3.5" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ItemActions>
                <ItemSeparator className="my-0 bg-border/50" />
                <div className="text-xs text-muted-foreground flex items-center justify-between w-full">
                  <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1">
                      <Link2 size={14} />{" "}
                      {
                        collection.items.filter((item) => item.type === "link")
                          .length
                      }
                    </span>
                    <Dot size={14} />
                    <span className="flex items-center gap-1">
                      <FileText size={12} />{" "}
                      {
                        collection.items.filter(
                          (item) => item.type === "rich_text",
                        ).length
                      }
                    </span>
                  </div>
                  <span>Updated {collection.updatedAt}</span>
                </div>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </div>
    </>
  );
}
