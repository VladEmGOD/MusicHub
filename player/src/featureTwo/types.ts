import { type User } from "../featureOne"

export type Order = {
  user: User;
  orderNumber: string;
  cost: number;
}