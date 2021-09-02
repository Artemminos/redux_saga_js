import axios from "axios";


export const getUser = async (pattern) => {
    const {data} = await axios.request({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users/1`
    });
    return data
}
