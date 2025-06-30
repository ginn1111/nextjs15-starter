import Header from "@/shared/ui/header"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/animate-ui/radix/sidebar"
import Navigation from "@/shared/ui/navigation"
import type { ReactNode } from "react"

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <Header />
        <div className="flex">
          <Sidebar collapsible="icon" className="mt-(--header-heigh)">
            <SidebarContent>
              <Navigation />
            </SidebarContent>
            <SidebarFooter className="h-14 flex items-center justify-center border-t">
              <span className="text-sm text-muted-foreground">© 2024</span>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1 p-6 min-w-0">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default MainLayout
