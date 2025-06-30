import path from "node:path"

const BASE_APP_PATH = path.join(import.meta.dirname, "app/[locale]/")

export const getChildOfRoutes = (routeName: string) => {
  return path.join(BASE_APP_PATH, routeName)
}
