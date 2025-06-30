import CredentialsProvider from "next-auth/providers/credentials"
import type { AuthOptions } from "next-auth"
import { SignJWT, jwtVerify, type JWTPayload } from "jose"

// In-memory users for demonstration
export const users = [
  { id: "1", name: "Alice", username: "alice", password: "password123" },
  { id: "2", name: "Bob", username: "bob", password: "password456" },
]

const secret = process.env.NEXTAUTH_SECRET
const secretKey = new TextEncoder().encode(secret)

export const jwt = {
  async encode({ token = {} }: { token?: Record<string, unknown> }) {
    const jwt = await new SignJWT(token as JWTPayload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secretKey)

    return jwt
  },
  async decode({ token }: { token?: string }) {
    if (!token) return null
    const { payload } = await jwtVerify(token, secretKey, { algorithms: ["HS256"] })

    return payload
  },
}

export const nextAuthConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null
        const user = users.find(
          (u) => u.username === credentials.username && u.password === credentials.password,
        )
        if (user) {
          return { id: user.id, name: user.name, username: user.username }
        }
        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt,
  secret,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/login", // Error code passed in query string as ?error=
  },
}
