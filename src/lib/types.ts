export type TaskStatus = "pending" | "processing" | "completed";
export type TaskPriority = "high" | "medium" | "low";

export interface SubTask {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  orderIndex: number;
}

export interface ProjectTask {
  id: string;
  title: string;
  description?: string;
  color: string;
  category: string;
  dueDate: string;
  orderIndex: number;
  subTasks: SubTask[];
  isExpanded?: boolean;
}

// For compatibility with single task detail view
export interface ActiveTaskSelection {
  projectId: string;
  subTaskId: string;
}

export type CollectionItemType = "link" | "rich_text";

export interface CollectionItem {
  id: string;
  type: CollectionItemType;
  title: string;
  contentOrUrl: string;
  domain?: string;
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
