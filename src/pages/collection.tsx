import { SwipeDrawer } from "@/components/swipe-drawer";
import { Button } from "@/components/ui/button";
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
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { initialCollections } from "@/lib/mockData";
import {
  Copy,
  Dot,
  FileText,
  Folder,
  Globe,
  Link2,
  PencilLine,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Collection() {
  const { id } = useParams<{ id: string }>();
  const collection = initialCollections.find((item) => item.id == id);

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <SwipeDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        title="Add item"
        description="Keep related links and notes together."
      >
        <div className="">
          <Tabs defaultValue="rich-text">
            <TabsList className="w-full mb-3">
              <TabsTrigger value="rich-text">
                <FileText className="size-3.5" /> Rich Text
              </TabsTrigger>
              <TabsTrigger value="link">
                <Link2 className="size-3.5" /> Link
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rich-text">
              <FieldGroup>
                <Field>
                  <Label>Title</Label>
                  <Input />
                </Field>
                <Field>
                  <Label>Rich Content</Label>
                  <Textarea />
                </Field>
                <Button>Save</Button>
              </FieldGroup>
            </TabsContent>
            <TabsContent value="link">
              <FieldGroup>
                <Field>
                  <Label>Title</Label>
                  <Input />
                </Field>
                <Field>
                  <Label>URL</Label>
                  <Input />
                </Field>
                <Field>
                  <Label>
                    Notes <span className="text-xs">(Optional)</span>
                  </Label>
                  <Textarea />
                </Field>
                <Button>Save</Button>
              </FieldGroup>
            </TabsContent>
          </Tabs>
        </div>
      </SwipeDrawer>

      <div className="overflow-y-auto p-4">
        <div className="space-y-3">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <Folder className="text-purple-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{collection?.title}</ItemTitle>
              <div className="text-xs text-muted-foreground">
                <p className="flex items-center gap-1">
                  <span className="flex items-center gap-1">
                    <Link2 size={14} />{" "}
                    {
                      collection?.items.filter((item) => item.type === "link")
                        .length
                    }{" "}
                    Link
                  </span>
                  <Dot size={14} />
                  <span className="flex items-center gap-1">
                    <FileText size={12} />{" "}
                    {
                      collection?.items.filter(
                        (item) => item.type === "rich_text",
                      ).length
                    }{" "}
                    Rich Text
                  </span>
                </p>
              </div>
            </ItemContent>
            <ItemActions></ItemActions>
            <ItemSeparator className="my-0 bg-border/50" />
            <div className="text-xs text-muted-foreground flex items-center">
              <span>Updated {collection?.updatedAt}</span>
            </div>
          </Item>

          <div className="flex items-center gap-4 justify-between">
            <Button onClick={() => setOpenDrawer(true)}>
              <Plus /> Add
            </Button>
            <Button variant="link" size="sm">
              <Plus /> Add current page
            </Button>
          </div>

          <InputGroup>
            <InputGroupInput
              placeholder="Search Items"
              className="placeholder:text-xs"
            />
            <InputGroupAddon align="inline-start">
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <div>
            <ItemGroup className="gap-2">
              {collection?.items.map((item) => (
                <Item key={item.id} variant="outline">
                  <ItemContent>
                    <ItemTitle>
                      {" "}
                      {item.type == "link" ? (
                        <span className="flex items-center gap-1">
                          <Globe className="size-3" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <FileText className="size-3" />
                        </span>
                      )}
                      {item?.title}
                    </ItemTitle>

                    <div
                      className={`text-[13px] bg-muted rounded-md px-3 py-2 h-full whitespace-pre-line`}
                    >
                      {item.type == "link" ? (
                        <a
                          target="_blank"
                          className="wrap-anywhere underline"
                          href={item.contentOrUrl}
                        >
                          {item.contentOrUrl}
                        </a>
                      ) : (
                        item.contentOrUrl
                      )}
                    </div>
                  </ItemContent>
                  <ItemSeparator className="my-0 bg-border/50" />
                  <div className="text-xs text-muted-foreground w-full flex items-center gap-2 justify-between">
                    <span>Added {item?.updatedAt}</span>
                    <div>
                      <Button size="icon-xs" variant="ghost">
                        <Copy />
                      </Button>

                      <Button size="icon-xs" variant="ghost">
                        <PencilLine />
                      </Button>

                      <Button size="icon-xs" variant="ghost">
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                </Item>
              ))}
            </ItemGroup>
          </div>
        </div>
      </div>
    </>
  );
}
