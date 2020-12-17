import express from 'express';
import {getAllData} from './Fantasy'
import {getCertainData} from './Fantasy'
import {getPlayerData} from './Fantasy'

const app = express();
let data: String;
let num: number;

getAllData().then((resp) => data = resp);

let getRandomColor = (): number => {
    return Math.floor(Math.random() * 256)
}

app.get('/', async (req: any, res: any)=>{
    data = await getAllData();
    res.send(data);
})

app.get(`/id/:id`, async (req: any, res: any)=>{
    let style = {
        color: `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
    }
    let id = req.params.id as number;
    res.send(`<p style=color:${style.color}>getting the data for player ${id}: ${await getCertainData(id)}</p>`);
})

app.get('/name/:name', async(req: any, res: any) => {
    let style = {
        color: `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
    }
    let name = req.params.name.toLowerCase();
    res.send(`<p style=color:${style.color}>${await getPlayerData(name)}</p>`);
})

const server = app.listen(process.env.PORT || 8080);
server.on('listening', () => {
    console.log("Hi there ", data);
});
