import { Router } from 'express';
import { signUp, signUpValidator } from './sign-up';

const router = Router();

router.post('/sign-up', [signUpValidator, signUp]);

export = router;
