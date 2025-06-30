import { URLBuilder } from "@/shared/lib/getUrl"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import ServerSidePage from "./_server-side-page"

export default async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch(new URLBuilder().withPath(URLBuilder.TODOS).build()).then((resp) => resp.json()),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServerSidePage />
    </HydrationBoundary>
  )
}
