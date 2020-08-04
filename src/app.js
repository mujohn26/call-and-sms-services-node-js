import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Route from './routes/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', Route);
app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to application!' }));
app.use((req, res) => res.status(404).send({
  status: 404,
  error: 'route Not Found!',
}));
export default app;
