import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserSW} from "../redux/ducks/userSlice";

const Blog = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch({type: getUserSW.type})

    }, [])
    const planets = useSelector(state => state.user.planets.results)
    console.log(planets)
    return (
        <div>
            {planets?.map((item, index) => {
                return (
                    <div key={index}>
                        {item.name}
                    </div>
                )
            })}
        </div>
    );
};

export default Blog;
