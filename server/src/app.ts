import express from 'express';

import morgan from 'morgan';

import path from 'path';

import indexRoutes from './routes/index';

import cors from 'cors';

const app = express();

//settings

app.set('port', process.env.PORT || 3000);

//middlewares 
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
app.use('/api', indexRoutes);


//esta carpeta para esta aplicacion sera usado para almacenar archivos publicos

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;