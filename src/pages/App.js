import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserSW} from "../redux/ducks/userSlice";
import "../styles.css";
import {Link} from "react-router-dom";

export default function App() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const users = useSelector(state => state.user.users.results)
    console.log(state)
    useEffect(() => {
        dispatch(getUser({test: "hi", id: 1}));
    }, [dispatch]);


    return (
        <div className="App">
            <button
                onClick={() => {
                    dispatch(getUserSW('hello'))
                }}
            >test
            </button>
         <div>   <Link to="/blog">
             to blog
         </Link></div>

        </div>
    );
}
