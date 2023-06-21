export type RegistrationResponseType = {
  id: string,
  email: string,
  username: string
}
export type RegistrationErrorsType = {
  [key: string]: string[]
}