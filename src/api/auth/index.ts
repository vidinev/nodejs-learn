import { Router } from 'express';
import { signUp } from './sign-up';

const router = Router();

router.post('/sign-up', signUp);

export = router;
