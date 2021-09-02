import axios from "axios";


export const getPosts = async (pattern) => {
    const {data} = await axios.request({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/posts`
    });
    return data
}
