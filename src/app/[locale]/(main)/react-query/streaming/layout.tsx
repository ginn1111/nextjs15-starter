import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return <section className="container p-4">{children}</section>
}

export default Layout
