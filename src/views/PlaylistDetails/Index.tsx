import React from 'react'
import "./PlaylistDetails.css"
import {useParams} from "react-router-dom"

function Index() {
    const {id}=useParams<any>();
    console.log("Hello this is my param",id);
    return (
        <div className="detail"> 
            <h1>Let's find something for your playlist </h1>
            <input placeholder="Search for Songs.." type="text" />
        </div>
    )
}

export default Index
