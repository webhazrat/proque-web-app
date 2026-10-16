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
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { initialTasks } from "@/lib/mockData";
import {
  ChevronDown,
  ChevronUp,
  GripVertical,
  PencilLine,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Tasks() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (location.state?.openAddDrawer) {
      setOpenDrawer(true);
    }
  }, [location]);
  return (
    <>
      <SwipeDrawer open={openDrawer} onOpenChange={setOpenDrawer}>
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
      </SwipeDrawer>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-medium mb-1">My Tasks</h2>
            <p className="text-xs text-muted-foreground">
              {initialTasks.length} spaces for your ideas
            </p>
          </div>
          <Button onClick={() => setOpenDrawer(true)}>
            <Plus data-icon="inline-start" /> Add Task
          </Button>
        </div>
        <InputGroup>
          <InputGroupInput
            placeholder="Search Tasks"
            className="placeholder:text-xs"
          />
          <InputGroupAddon align="inline-start">
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <ItemGroup className="gap-2">
          {initialTasks.map((task) => {
            const completedSubTask = task?.subTasks.filter(
              (item) => item.status == "completed",
            ).length;
            const totalSubTask = task?.subTasks.length;
            const progress =
              totalSubTask > 0
                ? Math.ceil((completedSubTask / totalSubTask) * 100)
                : 0;
            return (
              <Item variant="outline" key={task.id}>
                <ItemMedia variant="icon" className="flex-col gap-0">
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
                </ItemMedia>
                <ItemContent
                  onClick={() => navigate(`/task/${task.id}`)}
                  className="cursor-pointer"
                >
                  <ItemTitle>{task.title}</ItemTitle>
                  <div className="text-xs text-muted-foreground">
                    {task.description}
                  </div>
                </ItemContent>
                <ItemSeparator className="my-0 bg-border/50" />
                <div className="text-xs text-muted-foreground flex items-center justify-between w-full">
                  <div className="shrink-0 w-full max-w-50 flex items-center gap-2">
                    <Progress value={progress} className="w-full" />{" "}
                    <span className="text-[10px] shrink-0">
                      {completedSubTask}/{totalSubTask} ({progress}%)
                    </span>
                  </div>
                  {/* <span>Updated {task.dueDate}</span> */}
                  <div>
                    <Button
                      onClick={(e) => e.stopPropagation()}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <PencilLine />
                    </Button>

                    <Button
                      onClick={(e) => e.stopPropagation()}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              </Item>
            );
          })}
        </ItemGroup>
      </div>
    </>
  );
}
