import { IRoutes } from "../../types/types"
import { HomePage } from "./home"

export const app_routes: IRoutes[] = [
  {
    path: "/",
    element: <HomePage />,
  },
]
