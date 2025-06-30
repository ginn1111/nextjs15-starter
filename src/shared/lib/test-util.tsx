import { type RenderOptions, render } from "@testing-library/react"
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { type Locale, NextIntlClientProvider } from "next-intl"
import type React from "react"
import type { ReactElement } from "react"
import Providers from "../config/providers"

const CommonProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterContext
      value={{
        prefetch: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
        refresh: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
      }}
    >
      <Providers>{children}</Providers>
    </AppRouterContext>
  )
}

const customerRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, {
    wrapper: CommonProviders,
    ...options,
  })

export * from "@testing-library/react"
export { customerRender as render }
