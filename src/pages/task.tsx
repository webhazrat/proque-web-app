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
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { initialTasks } from "@/lib/mockData";
import {
  ChevronDown,
  ChevronUp,
  CircleCheck,
  CircleDashed,
  Clock,
  Dot,
  FolderOpen,
  GripVertical,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const priorities = [
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "High",
    value: "high",
  },
];

export function Task() {
  const { id } = useParams<{ id: string }>();
  const task = initialTasks.find((item) => item.id == id);

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <SwipeDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        title="Add Task"
        description="Keep task in a queue to be productive."
      >
        <div className="">
          <FieldGroup>
            <Field>
              <Label>Title</Label>
              <Input />
            </Field>
            <div className="flex gap-3">
              <Field>
                <Label>Priority</Label>
                <Select items={priorities}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <Label>Due Date</Label>
                <Input type="date" />
              </Field>
            </div>
            <Field>
              <Label>Notes</Label>
              <Textarea />
            </Field>
            <Button>Create</Button>
          </FieldGroup>
        </div>
      </SwipeDrawer>

      <div className="overflow-y-auto p-4">
        <div className="space-y-3">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <FolderOpen className="text-purple-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{task?.title}</ItemTitle>
              <ItemDescription className="text-xs">
                {task?.description}
              </ItemDescription>
            </ItemContent>
            <ItemActions></ItemActions>
            <ItemSeparator className="my-0 bg-border/50" />
            <div className="text-xs text-muted-foreground flex items-center">
              <span>Updated {task?.dueDate}</span>
            </div>
          </Item>

          <div className="flex gap-2">
            <InputGroup>
              <InputGroupInput
                placeholder="Search Items"
                className="placeholder:text-xs"
              />
              <InputGroupAddon align="inline-start">
                <Search />
              </InputGroupAddon>
            </InputGroup>

            <Button onClick={() => setOpenDrawer(true)}>
              <Plus /> Add
            </Button>
          </div>

          <div>
            <ItemGroup className="gap-2">
              {task?.subTasks.map((item) => (
                <Item key={item.id} variant="outline">
                  <ItemMedia variant="icon" className="self-start items-start">
                    <div className="flex flex-col gap-0">
                      <Button
                        size="icon-xs"
                        variant="link"
                        className="cursor-pointer h-auto"
                      >
                        <ChevronUp className="size-3.5" />
                      </Button>
                      <Button
                        size="icon-xs"
                        variant="link"
                        className="cursor-grab h-auto"
                      >
                        <GripVertical />
                      </Button>
                      <Button
                        size="icon-xs"
                        variant="link"
                        className="cursor-pointer h-auto"
                      >
                        <ChevronDown className="size-3.5" />
                      </Button>
                    </div>

                    {item.status === "completed" ? (
                      <CircleCheck className="mt-1 size-4 text-green-500" />
                    ) : item.status === "processing" ? (
                      <CircleDashed className="mt-1 size-4 text-blue-500" />
                    ) : (
                      <Clock className="mt-1 size-4 text-muted-foreground" />
                    )}
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle
                      className={`text-[13px] ${item.status === "completed" && "line-through text-muted-foreground"}`}
                    >
                      {item?.title}
                    </ItemTitle>
                    <div className="text-xs text-muted-foreground flex items-center justify-between">
                      <p className="flex">
                        <span
                          className={`text-xs font-medium uppercase ${
                            item.priority === "high"
                              ? "text-destructive"
                              : item.priority === "medium"
                                ? "text-amber-500"
                                : "text-green-500"
                          }`}
                        >
                          {item.priority}
                        </span>
                        <Dot className="size-4" />{" "}
                        <span>Added {item?.dueDate}</span>{" "}
                      </p>

                      <Button size="icon-xs" variant="ghost">
                        <Trash2 />
                      </Button>
                    </div>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </div>
        </div>
      </div>
    </>
  );
}
