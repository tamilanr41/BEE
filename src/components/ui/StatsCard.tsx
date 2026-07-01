import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: { value: number; isUp: boolean };
  description?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
}

const variants = {
  default: "bg-white border-secondary-200",
  primary: "bg-primary-50 border-primary-200",
  success: "bg-green-50 border-green-200",
  warning: "bg-yellow-50 border-yellow-200",
  danger: "bg-red-50 border-red-200",
};

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
  variant = "default",
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-5 shadow-sm transition-all hover:shadow-md",
        variants[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-secondary-500">{title}</p>
          <p className="text-2xl font-bold text-secondary-900">{value}</p>
          {description && (
            <p className="text-xs text-secondary-500">{description}</p>
          )}
        </div>
        <div
          className={cn(
            "rounded-lg p-2.5",
            variant === "default"
              ? "bg-secondary-100 text-secondary-600"
              : "bg-white/60 text-primary-600"
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {trend && (
        <div className="mt-3 flex items-center gap-1.5">
          {trend.isUp ? (
            <TrendingUp className="h-4 w-4 text-green-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
          <span
            className={cn(
              "text-sm font-medium",
              trend.isUp ? "text-green-600" : "text-red-600"
            )}
          >
            {trend.value}%
          </span>
          <span className="text-xs text-secondary-500">vs last month</span>
        </div>
      )}
    </div>
  );
}
