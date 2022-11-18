import { ReactNode } from "react"

export interface IRoutes {
  path: string
  element: ReactNode
}

export interface IPost {
  created_at: Date
  id: number
  text: string
  user: IPostAutor
}

export interface IPostAutor {
  name: string
  screen_name: string
}
