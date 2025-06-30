import { withAuth } from "next-auth/middleware"
import createMiddleware from "next-intl/middleware"
import { defaultLocale, locales, routing } from "@/shared/config/i18n/routing"
import { jwtVerify } from "jose"
import type { NextRequest } from "next/server"
import { init } from "next/dist/compiled/webpack/webpack"
import { jwt, nextAuthConfig } from "./shared/lib/next-auth-options"

const intlMiddleware = createMiddleware(routing)

function isNumber(val: unknown): val is number {
  return typeof val === "number" && !isNaN(val)
}

const authMiddleware = withAuth(
  async function middleware(request) {
    // i18n logic after auth
    return intlMiddleware(request)
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        if (!token) return false
        try {
          if (
            typeof token === "object" &&
            isNumber((token as any).exp) &&
            isNumber((token as any).iat)
          ) {
            const now = Math.floor(Date.now() / 1000)
            if ((token as any).exp > now && (token as any).iat <= now) {
              return true
            }
          }
          return false
        } catch {
          return false
        }
      },
    },
    pages: nextAuthConfig.pages,
    jwt: nextAuthConfig.jwt,
    secret: nextAuthConfig.secret,
  },
)

const publicPages = ["/", "/react-query", "/auth/login"]

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  )
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req)
  } else {
    return (authMiddleware as any)(req)
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|mockServiceWorker|_next/image|.*\\.png$).*)"],
}
