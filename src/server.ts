import express from 'express';
import { loshSequelize } from './sequelize';
import { User } from './models/user.model';

const app = express();

app.get('/', (req, res) => res.send('Hello World 123!'));

(async () => {
  await loshSequelize.authenticate();
  await User.sync({ force: true });

  await User.create({
    nickName: 'Anvid',
    email: 'test@test.com',
    password: '123'
  });
  const users = await User.findAll();
  console.log("All users:", JSON.stringify(users, null, 4));
})();


app.listen(3000, () => console.log('Example app listening on port 3000!'));
