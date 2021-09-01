import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserSW} from "../redux/ducks/userSlice";
import "../styles.css";

export default function App() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users.results)
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
            {users?.map((item,index)=>{
                return(
                    <React.Fragment key={index}>>
                        <ul >
                            <li>{item.name}</li>
                        </ul>
                        <br/>
                    </React.Fragment>
                )
            })}
        </div>
    );
}
