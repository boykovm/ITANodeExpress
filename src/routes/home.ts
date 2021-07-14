import express, {Request, Response, Router} from 'express';
import fs from 'fs';
import {keys} from '../keys';

const homeRouter: Router = express.Router();

homeRouter.get('/', (req: Request, res: Response) => {
  fs.readFile(keys.PATH, keys.ENCODING, (e, data) => {
    if (e) {
      console.error(e);
      return res.sendStatus(500);
    }
    res.send(data);
  });
});

homeRouter.post('/', (req: Request, res: Response) => {
  const data: string = req.body.data + '\n';
  fs.writeFile(keys.PATH, data, keys.ENCODING, (e) => {
    if (e) {
      console.error(e);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
});

homeRouter.patch('/', (req: Request, res: Response) => {
  const data: string = req.body.data + '\n';
  if (!fs.existsSync(keys.PATH)) {
    return res.sendStatus(500);
  }
  fs.appendFile(keys.PATH, data, (e) => {
    if (e) {
      console.error(e);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
});

homeRouter.delete('/', (req: Request, res: Response) => {
  fs.unlink(keys.PATH, (e) => {
    if (e) {
      console.error(e);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
});

export default homeRouter;