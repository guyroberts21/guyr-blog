import { Router } from 'express';
import { getPosts } from '../controllers/posts';

const router: Router = Router();

router.get('/posts', getPosts);

export default router;
