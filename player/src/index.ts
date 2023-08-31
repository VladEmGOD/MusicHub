import express from 'express'
import { createEmptyOrderForUser } from './featureTwo';
import { formatUser, type User } from './featureOne';

const app = express();

app.get('/', (req, res) => {
  const user: User = { age: 20, email: "some@g.com", name: "some name" };
  const order = createEmptyOrderForUser(user);

  res.send(formatUser(order.user) + "ordered order with num:" + order.orderNumber);
});

app.listen(4000, () => console.log("player microservice started at http://localhost:4000."));