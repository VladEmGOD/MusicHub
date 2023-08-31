import { User } from "./types";

export const formatUser = (user: User) => {
  return `${user.name} have email: ${user.email} and his age ${user.age}`;
}