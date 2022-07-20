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
                    imgsrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    ctitle="Crossword"
                    content="Limpsum code is an examplary text whhich is used to put some random text in an empty space"
                />
                <CardComp
                    imgsrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    ctitle="Crossword"
                    content="Limpsum code is an examplary text whhich is used to put some random text in an empty space"
                />
                <CardComp
                    imgsrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    ctitle="Crossword"
                    content="Limpsum code is an examplary text whhich is used to put some random text in an empty space"
                />
            </div>
        </div>

    )
}