import type { Collection, ProjectTask, UserProfile } from "./types";

export const initialProfile: UserProfile = {
  id: "usr-981",
  name: "Alex Rivers",
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  emails: [
    {
      id: "em-1",
      email: "alex.rivers@workmail.io",
      isPrimary: true,
      isVerified: true,
      addedAt: "2026-01-10",
    },
    {
      id: "em-2",
      email: "alex.personal@gmail.com",
      isPrimary: false,
      isVerified: true,
      addedAt: "2026-03-14",
    },
    {
      id: "em-3",
      email: "dev.team@proque.app",
      isPrimary: false,
      isVerified: true,
      addedAt: "2026-07-22",
    },
  ],
};

export const initialTasks: ProjectTask[] = [
  {
    id: "proj-1",
    title: "Proque Web App & Extension",
    description:
      "Core 380px browser extension popup with reactive client storage.",
    color: "#3b82f6",
    category: "Engineering",
    dueDate: "Oct 20, 2026",
    orderIndex: 0,
    isExpanded: true,
    subTasks: [
      {
        id: "sub-101",
        projectId: "proj-1",
        title: "Implement drag & drop sorting for projects and subtasks",
        description:
          "Provide smooth visual reordering with orderIndex updates.",
        status: "processing",
        priority: "high",
        dueDate: "Today",
        orderIndex: 0,
      },
      {
        id: "sub-102",
        projectId: "proj-1",
        title: "Refine Light mode contrast and custom dark variant",
        description:
          "Ensure text, borders, and inputs are pristine in light mode.",
        status: "completed",
        priority: "high",
        dueDate: "Oct 14",
        orderIndex: 1,
      },
      {
        id: "sub-103",
        projectId: "proj-1",
        title: "Build multi-email verification drawer with OTP",
        description:
          "Allow adding, removing, and switching primary email account.",
        status: "completed",
        priority: "medium",
        dueDate: "Oct 15",
        orderIndex: 2,
      },
      {
        id: "sub-104",
        projectId: "proj-1",
        title: "Package Chrome Extension manifest v3 build pipeline",
        description:
          "Configure Vite bundle for popup.html and background worker.",
        status: "pending",
        priority: "low",
        dueDate: "Oct 22",
        orderIndex: 3,
      },
    ],
  },
  {
    id: "proj-2",
    title: "NestJS & PostgreSQL Architecture",
    description: "Backend REST API, migrations, and Drizzle/TypeORM queries.",
    color: "#10b981",
    category: "Backend",
    dueDate: "Oct 25, 2026",
    orderIndex: 1,
    isExpanded: true,
    subTasks: [
      {
        id: "sub-201",
        projectId: "proj-2",
        title: "Setup PostgreSQL schema migrations for projects & subtasks",
        description:
          "Relational table with foreign key cascade on project deletion.",
        status: "processing",
        priority: "high",
        dueDate: "Oct 16",
        orderIndex: 0,
      },
      {
        id: "sub-202",
        projectId: "proj-2",
        title: "Implement bulk reorder endpoint with orderIndex swapping",
        description:
          "Atomic transaction to reorder project and subtask list in batch.",
        status: "pending",
        priority: "medium",
        dueDate: "Oct 18",
        orderIndex: 1,
      },
      {
        id: "sub-203",
        projectId: "proj-2",
        title: "Configure JWT Guard & Magic Link OTP Auth",
        description:
          "Secure passwordless email authentication with rate limiting.",
        status: "pending",
        priority: "high",
        dueDate: "Oct 24",
        orderIndex: 2,
      },
    ],
  },
  {
    id: "proj-3",
    title: "React Native Mobile App",
    description: "iOS and Android client with native gesture interactions.",
    color: "#8b5cf6",
    category: "Mobile",
    dueDate: "Nov 02, 2026",
    orderIndex: 2,
    isExpanded: false,
    subTasks: [
      {
        id: "sub-301",
        projectId: "proj-3",
        title: "Port Shadcn UI components with NativeWind",
        description:
          "Tailwind utility tokens mapped to native view components.",
        status: "pending",
        priority: "high",
        dueDate: "Oct 28",
        orderIndex: 0,
      },
      {
        id: "sub-302",
        projectId: "proj-3",
        title: "Integrate haptic feedback on drag-drop sorting",
        description:
          "Subtle tactile tick on reordering project and subtask items.",
        status: "pending",
        priority: "medium",
        dueDate: "Oct 30",
        orderIndex: 1,
      },
      {
        id: "sub-303",
        projectId: "proj-3",
        title: "Handle iOS Safe Area insets & Android status bar",
        description: "useSafeAreaInsets hook integration for 380px frame.",
        status: "completed",
        priority: "low",
        dueDate: "Oct 12",
        orderIndex: 2,
      },
    ],
  },
  {
    id: "proj-4",
    title: "Figma Make AI Design System",
    description:
      "Auto Layout token frames and 10-year veteran prompt templates.",
    color: "#f59e0b",
    category: "Design",
    dueDate: "Oct 18, 2026",
    orderIndex: 3,
    isExpanded: false,
    subTasks: [
      {
        id: "sub-401",
        projectId: "proj-4",
        title: "Draft 380px frame layout for projects with nested subtasks",
        description:
          "Ensure Auto Layout vertical hugging and drag handle components.",
        status: "completed",
        priority: "high",
        dueDate: "Oct 11",
        orderIndex: 0,
      },
      {
        id: "sub-402",
        projectId: "proj-4",
        title: "Generate Auto-Layout component variants for Light & Dark mode",
        description: "Zinc-950/Zinc-50 tokens with zero pill clutter.",
        status: "processing",
        priority: "medium",
        dueDate: "Today",
        orderIndex: 1,
      },
    ],
  },
];

export const initialCollections: Collection[] = [
  {
    id: "col-1",
    title: "Design Systems & Shadcn",
    group: "Design",
    description:
      "Curated references, tokens, and components for extension & mobile interfaces.",
    color: "#3b82f6",
    updatedAt: "Today",
    isShared: true,
    items: [
      {
        id: "item-101",
        type: "link",
        title: "Shadcn UI Component Registry",
        contentOrUrl: "https://ui.shadcn.com/docs/components",
        notes: "Strictly follow Zinc neutral palette & 12px border radius.",
        updatedAt: "Oct 12, 2026",
      },
      {
        id: "item-102",
        type: "rich_text",
        title: "380px Viewport Spatial Rules",
        contentOrUrl:
          "Key rules for 380px width:\n• Header height fixed at 52px\n• Bottom navigation 60px\n• Content container padding: px-4 (16px)\n• Horizontal card gap: 10px\n• Touch targets minimum 44px",
        updatedAt: "Oct 11, 2026",
      },
      {
        id: "item-103",
        type: "link",
        title: "Lucide Icon Directory",
        contentOrUrl: "https://lucide.dev/icons",
        notes: "Use 18px-20px stroke width 2 for primary tab icons.",
        updatedAt: "Oct 08, 2026",
      },
    ],
  },
  {
    id: "col-2",
    title: "NestJS & PostgreSQL Architecture",
    group: "Backend",
    description:
      "API controllers, schema migrations, and Drizzle/TypeORM queries.",
    color: "#10b981",
    updatedAt: "Yesterday",
    isShared: false,
    items: [
      {
        id: "item-201",
        type: "rich_text",
        title: "Multi-Email Database Schema Draft",
        contentOrUrl:
          "Tables:\n1. users (id UUID, name TEXT, created_at TIMESTAMPTZ)\n2. user_emails (id UUID, user_id UUID, email CITEXT UNIQUE, is_primary BOOLEAN, is_verified BOOLEAN)\nIndex on user_emails(user_id, email)",
        updatedAt: "Oct 10, 2026",
      },
      {
        id: "item-202",
        type: "link",
        title: "NestJS Authentication & JWT Guard Guide",
        contentOrUrl: "https://docs.nestjs.com/security/authentication",
        notes: "Implement magic link OTP verification with rate limiting.",
        updatedAt: "Oct 09, 2026",
      },
    ],
  },
  {
    id: "col-3",
    title: "Figma AI & Wireframing Prompts",
    group: "Product",
    description:
      "Prompt templates, Galileo rules, and component auto-layout constraints.",
    color: "#8b5cf6",
    updatedAt: "2 days ago",
    isShared: true,
    items: [
      {
        id: "item-301",
        type: "rich_text",
        title: "10-Year Prompt Engineer Blueprint for Figma Make",
        contentOrUrl:
          "Always specify:\n1. Strict Frame geometry (W: 380px, H: 640px scroll)\n2. Auto Layout hierarchy & pixel values\n3. Shadcn/Tailwind zinc token mapping\n4. Screen state transitions & interactive affordances",
        updatedAt: "Oct 07, 2026",
      },
      {
        id: "item-302",
        type: "link",
        title: "Figma Make AI Design Guidelines",
        contentOrUrl: "https://help.figma.com/hc/en-us/articles/figma-make",
        notes: "Best practices for generating multi-screen design systems.",
        updatedAt: "Oct 06, 2026",
      },
    ],
  },
  {
    id: "col-4",
    title: "Browser Extension Manifest v3",
    group: "Engineering",
    description: "Background workers, popup lifecycle, and storage sync.",
    color: "#f59e0b",
    updatedAt: "5 days ago",
    isShared: false,
    items: [
      {
        id: "item-401",
        type: "link",
        title: "Chrome Extension Storage API",
        contentOrUrl:
          "https://developer.chrome.com/docs/extensions/reference/storage",
        updatedAt: "Oct 05, 2026",
      },
    ],
  },
  {
    id: "col-5",
    title: "Mobile App React Native Bridge",
    group: "Mobile",
    description: "Cross-platform UI components & haptic feedback patterns.",
    color: "#ec4899",
    updatedAt: "1 week ago",
    isShared: false,
    items: [
      {
        id: "item-501",
        type: "rich_text",
        title: "React Native Safe Area Insets",
        contentOrUrl:
          "Use useSafeAreaInsets() for top status bar (approx 44px) and bottom home indicator (approx 34px).",
        updatedAt: "Oct 02, 2026",
      },
    ],
  },
];
