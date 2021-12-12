import * as express from 'express';
import { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes';

const app: Express = express.default();
require('dotenv').config({ path: './config.env' });
const port: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(postRoutes);

const uri: string = process.env.ATLAS_URI || '';

mongoose
	.connect(uri, {})
	.then(() =>
		app.listen(port, () =>
			console.log(`Server running on http://localhost:${port}`)
		)
	)
	.catch((error) => {
		throw error;
	});
