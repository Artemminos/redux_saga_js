
import axios from "axios";


export const getSW = async (pattern) => {
    const {data} = await axios.request({
        method: "get",
        url: `http://swapi.dev/api/${pattern}`
    });
    return data
}
export const getSWPEOPLE =async (page,search)=>{
    const {data} = await axios.request({
        method: "get",
        url: `http://swapi.dev/api/people?page=${page}&search=${search}`
    });
    return data
}