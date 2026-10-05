import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Item, ItemActions, ItemContent, ItemTitle } from "./ui/item";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const emails: string[] = [
  "mdhazrat445891@gmail.com",
  "pro.hazrat@gmail.com",
  "dev.hazrat@gmail.com",
  "dee392611@gmail.com",
];

interface AssociateEmailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AssociateEmails({ open, onOpenChange }: AssociateEmailsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Associate Emails</DialogTitle>
            <DialogDescription>
              Which emails want to add for syc from other devices.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            {emails.map((email) => (
              <Item key={email} variant="outline" className="py-2">
                <ItemContent>
                  <ItemTitle className="font-normal">{email}</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <Button variant="destructive" size="icon-sm">
                    <Trash2 />
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </div>

          <Field>
            <FieldLabel htmlFor="email007">Name on Card</FieldLabel>
            <Input id="email007" placeholder="Evil Rabbit" required />
          </Field>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
