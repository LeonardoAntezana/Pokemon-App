import axios from "axios";

export const dataAxios = async (url) => {
    try{
        const data = await axios.get(url)
        return data
    }
    catch(error){
        console.log(err)
    }
}


export const filters = ['fire', 'water', 'flying', 'poison', 'bug', 'All']