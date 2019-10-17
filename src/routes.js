import { Router } from 'express';
import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Fabio Junior',
    email: 'fabio2@exemplo.com',
    password_hash: '12312313',
  });
  res.json(user);
});

export default routes;
