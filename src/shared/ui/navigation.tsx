"use client"

import type React from "react"
import { type Route, routes } from "@/shared/lib/routes"
import { usePathname } from "@/shared/config/i18n/navigation"
import { cn } from "@/shared/lib/utils"
import {
  MotionHighlight,
  MotionHighlightItem,
} from "@/components/animate-ui/effects/motion-highlight"

interface NavigationItemProps {
  route: Route
  level?: number
}

const NavigationItem: React.FC<NavigationItemProps> = ({ route, level = 0 }) => {
  const pathname = usePathname()
  const isActive = pathname === route.path
  const Icon = route.icon

  return (
    <MotionHighlightItem>
      <div className={cn("flex flex-col", level > 0 && "ml-4")}>
        <a
          href={route.path}
          className={cn(
            "flex items-center gap-2 px-2 py-1.5 text-sm transition-colors",
            isActive
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
          )}
        >
          <Icon className="w-4 h-4" />
          <span>{route.label}</span>
        </a>
        {route.children && (
          <div className="mt-1">
            {route.children.map((child) => (
              <NavigationItem key={child.path} route={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    </MotionHighlightItem>
  )
}

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col gap-1">
      {routes.map((route) => (
        <NavigationItem key={route.path} route={route} />
      ))}
    </nav>
  )
}

export default Navigation
