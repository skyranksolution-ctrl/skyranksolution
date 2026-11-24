import React from "react";
import {
  Search,
  MapPin,
  Code2,
  FileText,
  Share2,
  ShoppingCart,
  Globe,
  Bot,
  Key,
  TrendingUp,
  Link2,
  BookOpen,
  Building,
  Layout,
  Smartphone,
  Layers,
  ShoppingBag,
  Building2,
  HeartPulse,
  GraduationCap,
  Compass,
  Cpu,
  BarChart3,
  CheckCircle2,
  Zap,
  ShieldCheck,
  LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Search,
  MapPin,
  Code2,
  FileText,
  Share2,
  ShoppingCart,
  Globe,
  Bot,
  Key,
  TrendingUp,
  Link2,
  BookOpen,
  Building,
  Layout,
  Smartphone,
  Layers,
  ShoppingBag,
  Building2,
  HeartPulse,
  GraduationCap,
  Compass,
  Cpu,
  BarChart3,
  CheckCircle2,
  Zap,
  ShieldCheck,
};

export function DynamicIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = iconMap[name] || Search;
  return <IconComponent className={className} />;
}
