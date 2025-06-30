import { URLBuilder } from "@/shared/lib/getUrl"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import StreamingPage from "./_streaming-page"
import { Suspense } from "react"

export default () => {
  const queryClient = new QueryClient()
  queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch(new URLBuilder().withPath(URLBuilder.TODOS).build()).then((resp) => resp.json()),
  })

  return (
    <div className="border border-red-500 p-4 space-y-2">
      <div className="border border-blue-500 p-4">Server side render section</div>
      <div className="border border-green-500 p-4 wrap-break-word">
        <p>Streaming section</p>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={"LoAdInG..."}>
            <StreamingPage />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  )
}
