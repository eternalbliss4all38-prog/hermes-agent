import {
  Terminal, Lightbulb, Network, Orbit, Target, Clapperboard,
  Search, Code2, History, FolderOpen, ScrollText,
  type LucideIcon
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  newTab?: boolean;
}

export interface NavGroup {
  category: string;
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    category: "WORKSPACE",
    items: [
      { href: "/mission-control", label: "Mission Control", icon: Terminal },
      { href: "/live", label: "Live Console", icon: ScrollText },
      { href: "/idea-factory", label: "Idea Factory", icon: Lightbulb },
      { href: "/goal-mode", label: "Goal Mode", icon: Target },
      { href: "/video-studio", label: "Video Studio", icon: Clapperboard },
      { href: "/audio-studio", label: "Audio Studio", icon: Clapperboard },
      { href: "/creative-studio", label: "Creative Studio", icon: Clapperboard },
      { href: "/seo-machine", label: "SEO Machine", icon: Search },
      { href: "/code-workbench", label: "Code Workbench", icon: Code2 },
    ],
  },
  {
    category: "AUTOMATIONS",
    items: [
      { href: "/n8n", label: "n8n Flow Builder", icon: Network, newTab: true },
      { href: "/comfyui", label: "ComfyUI Studio", icon: Code2 },
      { href: "/paperclip-org", label: "Paperclip Org", icon: Network },
    ],
  },
  {
    category: "MANAGEMENT",
    items: [
      { href: "/sessions", label: "Sessions", icon: History },
      { href: "/files", label: "Files", icon: FolderOpen },
    ],
  },
  {
    category: "SELF",
    items: [
      { href: "/memory-galaxy", label: "Memory Galaxy", icon: Orbit },
    ],
  },
];

export const NAV_ITEMS: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);
