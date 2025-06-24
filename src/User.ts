import type { UserDetails } from './types'

class User implements UserDetails {
  id: number
  firstName: string
  lastName: string
  email: string

  constructor({ id, firstName, lastName, email }: UserDetails) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
  }
}

export default User
