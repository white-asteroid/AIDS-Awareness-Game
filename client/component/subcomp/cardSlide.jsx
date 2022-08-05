// import Carousel from 'carousel-react-rcdev'
import React from "react";
import CardComp from "./CardComp";
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
export default function CardSlides() {
    return (

        <div className="container-fluid p-4">
            <div className="row m-5 col-12">
                <CardComp
                    imgsrc="https://thumbs.dreamstime.com/b/ready-quiz-written-notebook-marker-pen-glasses-wooden-desk-business-concept-ready-quiz-118902066.jpg"
                    ctitle="Quiz Game"
                    content="You will be asked different and interesting factual questions regarding AIDS. "
                />
                <CardComp
                    imgsrc="https://en.islcollective.com/preview/201711/f/clothes-memory-game-fun-activities-games-games_102602_1.jpg"
                    ctitle="Memory game"
                    content="In this game you have flip cards. Whichever card matches the previous one you found a pair! "
                />
                 <CardComp
                    imgsrc="https://thumbs.dreamstime.com/b/ready-quiz-written-notebook-marker-pen-glasses-wooden-desk-business-concept-ready-quiz-118902066.jpg"
                    ctitle="Quiz Game"
                    content="you will be asked different and interesting factual questions regarding AIDS "
                />
                
            </div>
        </div>

    )
}