
export interface Task {
  id: string,
  title: string,
  desc: string,
  marked_as_done: boolean,
  created_at: number
}
export interface User {
  loggedIn: boolean
  session?: string
  userName?: string
}