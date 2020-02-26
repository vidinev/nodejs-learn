import * as express from 'express';
import authRouter from './auth';

let router = express.Router();

router.use('/auth', authRouter);

export = router;
