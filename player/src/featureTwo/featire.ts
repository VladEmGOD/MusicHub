import type { Order } from './types';
import type { User } from "../featureOne"

export const createEmptyOrderForUser = (user: User): Order => ({ user, cost: 0, orderNumber: "some order number" }); 