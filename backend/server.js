import 'dotenv/config';
import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = process.env.PORT || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, '../..', 'frontend');
app.use(express.static(publicDirectory));

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port ${port}`));

const io = new Server(server);

export default io;
