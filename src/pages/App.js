import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import "../styles.css";
import {Link} from "react-router-dom";

export default function App() {



    return (
        <div className="App">

         <div>   <Link to="/blog">
             to blog
         </Link></div>

        </div>
    );
}
