
export interface Task {
  id: string,
  title: string,
  desc: string,
  marked_as_done?: boolean,
  created_at?: number
}
export interface Auth {
  loggedIn: boolean
  status: AsyncActionStatus
  user?: User
}

export interface User {
  token: string
  created_at: string
  firstname: string
  id: string
  lastname: string
  session: string
  username: string
}

export enum AsyncActionStatus {
  UNSTARTED = 'UNSTARTED',
  STARTED = 'STARTED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}