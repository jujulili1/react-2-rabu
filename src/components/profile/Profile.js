import React from 'react'
import "./Profile.css"
function Profile(props) {
    return (
        <div className="body">
            <h1>{props.name}</h1>
            <img src={props.avatar} alt="avatar"/>
    <p>{props.address}</p>
            
        </div>
    )
}

export default Profile

