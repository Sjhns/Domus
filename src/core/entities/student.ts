import { User } from './user'

export type Student = User & {
  university: string
  course: string
}
