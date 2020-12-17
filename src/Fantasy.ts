import axios from 'axios'
import {fetchBootstrap} from 'fpl-api'


const URL = 'https://fantasy.premierleague.com/api/entry/565066/'


export async function getAllData(): Promise<String>{
    let resp = await fetchBootstrap();
    console.log("resp: ", resp.elements[0].first_name);
    return resp.elements[0].first_name;
}   

export async function getCertainData(id: number): Promise<String>{
    let resp = await fetchBootstrap();
    console.log("resp: ", resp.elements[0].first_name);
    return resp.elements[id].first_name;
}   

export async function getPlayerData(name: String): Promise<String>{
    let resp = await fetchBootstrap();
    let result: String;
    result = "";
    for(let i of resp.elements){
        if(i.first_name.toLowerCase() == name){
            if(result == "")
                result += `Retrieving form for all players with the name '${name}':\n`
            result += `${name} ${i.second_name} has form of ${i.form}\n`;
        }
    }
    if (result != "")
        return result;
    return "player form not available";
}   