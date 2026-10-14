export type TaskStatus = "pending" | "processing" | "completed";
export type TaskPriority = "high" | "medium" | "low";

export interface Task {
  id: string;
  title: string;
  description?: string;
  project: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  orderIndex: number;
}

export type CollectionItemType = "link" | "rich_text";

export interface CollectionItem {
  id: string;
  type: CollectionItemType;
  title: string;
  contentOrUrl: string;
  notes?: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  title: string;
  group: string;
  description?: string;
  color: string;
  updatedAt: string;
  isShared?: boolean;
  items: CollectionItem[];
}

export interface AssociatedEmail {
  id: string;
  email: string;
  isPrimary: boolean;
  isVerified: boolean;
  addedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  emails: AssociatedEmail[];
}

export interface Reminder {
  id: string;
  title: string;
  timeStr: string;
  isCompleted: boolean;
  category: "task" | "collection" | "deadline";
}

export type AppScreen =
  | "home"
  | "tasks"
  | "single_task"
  | "collections"
  | "single_collection"
  | "login";
