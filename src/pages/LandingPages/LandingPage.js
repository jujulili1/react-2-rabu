import React, {useState} from 'react'
import Profile from "../../components/profile/Profile"
import image from "../../assets/images/1.jpg"


function LandingPage() {
    const [name] = useState("Tri Yulianto");
  const [avatar] = useState(image);
  const [address] = useState("Kemayoran");
    return (
        <div>
            <Profile name = {name} avatar = {avatar} address ={address} />
        </div>
    )
}

export default LandingPage
