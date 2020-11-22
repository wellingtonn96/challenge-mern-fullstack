import express from 'express';
import cors from 'cors';
import routes from './routes';
import { createConnection } from './database';

const app = express();

createConnection();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Web server running on port 3333'));
