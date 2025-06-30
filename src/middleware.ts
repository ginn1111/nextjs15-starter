import createMiddleware from "next-intl/middleware"
import { defaultLocale, routing } from "@/shared/config/i18n/routing"
import type { NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  // Do something

  const handleI18nRouting = createMiddleware(routing)
  const response = handleI18nRouting(request)

  // Do something with headers, cookie, ...
  response.headers.set("x-your-custom-locale", defaultLocale)

  return response
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
