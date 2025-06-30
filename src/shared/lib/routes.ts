import { type LucideIcon, Home, Shield, LogIn, LogOut, Database, Zap } from "lucide-react"

export interface Route {
  path: string
  label: string
  icon: LucideIcon
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: "/",
    label: "Home",
    icon: Home,
  },
  {
    path: "/auth",
    label: "Authentication",
    icon: Shield,
    children: [
      {
        path: "/auth/login",
        label: "Login",
        icon: LogIn,
      },
      {
        path: "/auth/signout",
        label: "Sign Out",
        icon: LogOut,
      },
    ],
  },
  {
    path: "/protected",
    label: "Protected",
    icon: Shield,
  },
  {
    path: "/react-query",
    label: "React Query",
    icon: Database,
    children: [
      {
        path: "/react-query/server-side",
        label: "Server Side",
        icon: Database,
      },
      {
        path: "/react-query/streaming",
        label: "Streaming",
        icon: Zap,
      },
    ],
  },
]
