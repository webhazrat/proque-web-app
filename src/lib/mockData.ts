import type { Collection } from "./types";

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
