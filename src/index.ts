require('dotenv').config();
import express from 'express';
import router from './routes';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',router);

const port: any = process.env.port;
const host: any = process.env.host;
app.listen(port, host, () => {
    console.log(`Server Started on http://${host}:${port}`);
});