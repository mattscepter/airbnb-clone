import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./Banner.css"
import Search from './Search';


function Banner() {
    const history = useHistory();
    const [showSearch,setshowSearch]=useState(false);

    return (
        <div className="banner">
            <dvi className="banner__search">
                {showSearch && <Search/>}

                <Button onClick={()=> setshowSearch(!showSearch)} variant="outlined" className="banner__searchbutton">{showSearch?"Hide":"Search Dates"}</Button>
            </dvi>
            <div className="banner__info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of getway to uncover the hidden gems near you
                </h5>
                <Button variant="outlined" onClick={()=>history.push("/search")}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
