export type User = {
  username: string
  password: string
}

export type UserSchema = {
  authData?: User

  _inited: boolean
}
