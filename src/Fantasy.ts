import axios from 'axios'

const URL = 'https://fantasy.premierleague.com/api/entry/565066/'


export async function getAllData(): Promise<object>{
    let resp = await axios.get(URL);
    console.log("resp: ", resp.config.data)
    return resp.data;
} 