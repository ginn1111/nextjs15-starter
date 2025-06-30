"use client"

import { URLBuilder } from "@/shared/lib/getUrl"
import { useSuspenseQuery } from "@tanstack/react-query"
import axios from "axios"

const StreamingPage = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: () => axios.get(new URLBuilder().withPath(URLBuilder.TODOS).build()),
  })

  return <div>{JSON.stringify(data)}</div>
}

export default StreamingPage
