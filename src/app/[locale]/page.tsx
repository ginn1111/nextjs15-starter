import { Button } from "@/shared/ui/button"
import axios from "axios"
import { getTranslations } from "next-intl/server"

const Main = async () => {
  const t = await getTranslations()
  const resp = await axios.get("http://localhost:3000/api/todos")

  return (
    <div>
      <h1>{t("main")}</h1>
      <Button>Click me</Button>
      {JSON.stringify(resp.data)}
    </div>
  )
}

export default Main
