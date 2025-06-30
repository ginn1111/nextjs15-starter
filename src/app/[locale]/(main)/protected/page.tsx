"use client"
import { useSession, signOut } from "next-auth/react"

export default function ProtectedPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow text-red-600">
        You are not authenticated.
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
      <div className="mb-4">
        Welcome, <b>{session.user?.name}</b>!
      </div>
      <button
        type="button"
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
      >
        Sign out
      </button>
    </div>
  )
}
