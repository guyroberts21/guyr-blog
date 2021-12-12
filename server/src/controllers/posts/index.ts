import { Response, Request } from 'express';
import { IPost } from '../../types/post';
import Post from '../../models/post';

const getPosts = async (req: Request, res: Response): Promise<void> => {
	try {
		const posts: IPost[] = await Post.find();
		res.status(200).json({ posts });
	} catch (error) {
		throw error;
	}
};

export { getPosts };
