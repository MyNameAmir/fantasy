import express from 'express';
import {getAllData} from './Fantasy'

const app = express();

app.get('/', (req: any, res: any)=>{
    res.send(getAllData());
})

const server = app.listen(process.env.PORT || 8080);
server.on('listening', () => {
    getAllData().then(console.log).catch(console.error);
});
