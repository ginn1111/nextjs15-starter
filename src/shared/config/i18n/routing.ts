import { defineRouting } from "next-intl/routing"

export const locales = ["vi-VN", "en-US"]
export const defaultLocale = locales[0]

export type Locale = (typeof locales)[number]

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // trim locale prefix when it match the default locale
  localePrefix: "as-needed", // "always" | "never" | "as-needed"
})
