import { IPost } from '../types/post';
import { model, Schema } from 'mongoose';

const postSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default model<IPost>('Post', postSchema);
