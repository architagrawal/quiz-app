import React, {useState} from 'react'
import "./style.css"




const Intro = ({startQuiz}) => (
    <div className="intro-page">
        <img className="top-blob" src="./imgs/top-blob.png" />
        <h1 className="site-title"> Quizzical </h1>
        <p>Test your knowledge with a random 5 question quiz</p>
        <button className="start-btn" onClick={startQuiz}>Start quiz</button> 
        <img className="bottom-blob" src="./imgs/bottom-blob.png" />      
    </div>
)

export default Intro