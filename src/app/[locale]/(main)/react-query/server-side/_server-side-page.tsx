"use client"

import { URLBuilder } from "@/shared/lib/getUrl"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const ServerSidePage = () => {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => axios.get(new URLBuilder().withPath(URLBuilder.TODOS).build()),
  })

  return <div>{JSON.stringify(data)}</div>
}

export default ServerSidePage
