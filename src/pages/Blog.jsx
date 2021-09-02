import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Blog = () => {
    const dispatch = useDispatch();


    const planets = useSelector(state => state.user.planets.results)

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
