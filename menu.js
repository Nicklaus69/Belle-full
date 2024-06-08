import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

export const app = express();
export const PORT = 28000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) =>  res.send('WELCOME TO BELLE FULL RESTAURANT'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


