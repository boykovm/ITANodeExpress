import express, { Express, Request, Response } from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import { keys } from './keys';

const app: Express = express();

app.use(bodyParser.json());
app.use(routes);

app.route('*')
  .get((req: Request, res: Response) => {
  res.sendStatus(404);
});

app.listen(keys.PORT, keys.HOSTNAME, () => {
  console.log(`Server was running at http://${keys.HOSTNAME}:${keys.PORT}/`);
});