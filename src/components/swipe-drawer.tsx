import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import type { ReactNode } from "react";

interface SwipeDrawerProps {
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export function SwipeDrawer({
  title,
  description,
  open,
  onOpenChange,
  children,
}: SwipeDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} showSwipeHandle>
      <DrawerContent>
        {title && (
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription className="text-xs">
              {description}
            </DrawerDescription>
          </DrawerHeader>
        )}
        <div className="flex-1 p-4">{children}</div>
        {/* <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
