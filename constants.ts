import { VideotapeIcon } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Code, Code2, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { MessageChannel } from "worker_threads";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Conversation Gift',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Music Gift',
    icon: Music,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Image Gift',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Video Gift',
    icon: VideotapeIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Code Gift',
    icon: Code2,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];
