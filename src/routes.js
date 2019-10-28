import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Felipe Maciel',
    email: 'felipemrvieira@gmail.com',
    password_hash: '123123',
  });
  return res.json(user);
});

export default routes;
