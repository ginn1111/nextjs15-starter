import NextAuth from "next-auth"
import { nextAuthConfig } from "@/shared/lib/next-auth-options"

const handler = NextAuth(nextAuthConfig)

export { handler as GET, handler as POST }
