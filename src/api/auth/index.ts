import { Router } from 'express';
import { signUp, signUpValidator } from './sign-up';
import { login, loginValidator } from './login';

const router = Router();

router.post('/sign-up', [signUpValidator, signUp]);
router.post('/login', [loginValidator, login]);

export = router;
