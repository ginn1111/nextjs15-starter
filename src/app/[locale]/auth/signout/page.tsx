"use client"
import { useEffect } from "react"
import { signOut } from "next-auth/react"

export default function SignOutPage() {
  useEffect(() => {
    signOut({ callbackUrl: "/auth/login" })
  }, [])
  return <div>Signing out...</div>
}
