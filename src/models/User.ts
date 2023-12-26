import { type Member } from './Member'
import { type RoleName, type Role } from './Role'

export interface User {
  id: number

  password: string

  hasToResetPassword: boolean

  email: string

  memberInfo: Member

  roles: Role[]

  creatorRoles: RoleName[]
}
