import {
  ChevronLeft,
  Dot,
  LogOut,
  Plus,
  ShieldPlus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { Badge } from "./ui/badge";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SwipeDrawer } from "./swipe-drawer";
import { useState } from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./ui/item";
import { Field, FieldGroup } from "./ui/field";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function AppHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  return (
    <header className="flex items-center justify-between py-3 px-4 border-b sticky top-0 bg-background">
      {isHome ? (
        <div className="flex items-center gap-2">
          <Logo /> <Badge variant="outline">v1.0</Badge>
        </div>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ChevronLeft />
        </Button>
      )}
      <Avatar onClick={() => setOpenDrawer(true)}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>

      <SwipeDrawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <div>
          <Item className="bg-muted">
            <ItemMedia variant="icon">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Alex Rivers</ItemTitle>
              <ItemDescription className="text-xs">
                alex.rivers@workmail.io
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item className="px-0">
            <ItemContent>
              <ItemTitle>Associated Emails</ItemTitle>
              <ItemDescription className="text-xs">
                Link multiple emails to a single profile
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="link">
                <Plus /> Add Email
              </Button>
            </ItemActions>
          </Item>

          <ItemGroup className="gap-2">
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>alex.rivers@workmail.io</ItemTitle>
                <ItemDescription className="text-xs flex items-center gap-1">
                  <span>Primary</span> <Dot className="size-3.5" />{" "}
                  <span className="flex items-center gap-1 text-green-800">
                    <ShieldPlus className="size-3.5" /> Verified
                  </span>
                </ItemDescription>
              </ItemContent>
            </Item>

            <Item variant="outline">
              <ItemContent>
                <ItemTitle>alex.rivers@workmail.io</ItemTitle>
                <ItemDescription className="text-xs flex items-center gap-1">
                  <span>Make Primary</span> <Dot className="size-3.5" />{" "}
                  <span className="flex items-center gap-1 text-green-800">
                    <ShieldPlus className="size-3.5" /> Verified
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="icon-xs" variant="destructive">
                  <Trash2 />
                </Button>
              </ItemActions>
            </Item>
            <Item variant="outline" className="border-green-400">
              <FieldGroup>
                <Field>
                  <div className="flex items-center gap-2 justify-between">
                    <Label>Link Another Email</Label>{" "}
                    <span className="text-muted-foreground text-xs">
                      Cancel
                    </span>
                  </div>
                  <Input placeholder="e.g. - secondary@gmail.com" />
                  <Button>Send Verification Code</Button>
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <div className="flex items-center gap-2 justify-between">
                    <Label>Enter Verification Code</Label>{" "}
                    <span className="text-muted-foreground text-xs">
                      Cancel
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Send a 6-digit passcode to <strong>g@gmail.com</strong>{" "}
                    <span className="underline text-primary ml-2">Change</span>
                  </p>
                  <div className="flex gap-2 items-center">
                    <Input placeholder="e.g. - 445566" />
                    <Button>Verify</Button>
                  </div>
                </Field>
              </FieldGroup>
            </Item>
            <ItemSeparator className="my-1 bg-border/50" />
            <ItemFooter>
              <span className="text-xs text-muted-foreground">
                Proque Extension & Mobile Sync
              </span>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => navigate("/login")}
              >
                <LogOut /> Sign Out
              </Button>
            </ItemFooter>
          </ItemGroup>
        </div>
      </SwipeDrawer>
    </header>
  );
}
