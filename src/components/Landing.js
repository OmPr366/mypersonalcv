import React from 'react'
import './Landing.css'
import pic from '../Assests/MyPic-removebg-preview.png'

const Landing = () => {
    return (
        <section id="header">
        <div class="userBox">
            <img src={pic} alt=""/>
            <h3>Om Prakash</h3>
            <p>Coder | Front End Devloper</p>
        </div>
        <div class="scrollBtn">
            <div class="scrollBar">
                <a href=""><span></span></a>
            </div>
        </div>
    </section>
    )
}

export default Landing
