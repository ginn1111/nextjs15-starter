import { type ReactNode, useEffect, useState } from "react"

const MockProvider = ({ children }: { children: ReactNode }) => {
  const [init, setInit] = useState(true)
  useEffect(() => {
    ;(async () => {
      try {
        if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
          const { worker } = await import("@mocks/browser")
          await worker.start({ onUnhandledRequest: "warn" })
          setInit(false)
        } else {
          setInit(false)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  if (init) return null

  return children
}

export default MockProvider
