import React from "react";
// import './Game2.css';
import Countdown from 'react-countdown';
// import { card } from 'react-bootstrap';
import { useState, useContext } from "react";
// import p1 from "../game2/Img/img2.jpg";
// import Images from "../component/game2_components/Images";
import { UserContext } from "../context";
import axios from "axios";
import UserRoute from "../component/routes/UserRoutes";
import Images from "../component/game2_components/Images";
import Router, { useRouter } from "next/router";
import { shuffle, values } from "lodash";
// class Images{
//   image1= "./assets/img1.webp";
// }
function Memorygame() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  const [counterPair, setPairCounter] = useState(0);
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  if (state && state.user) {
    console.log(state.user.email);
    const email = state.user.email;
  }
  const [Datenow, setDatenow] = useState(Date.now());
  // if(cards!==null)
  // {
  //   console.log(cards);
  // }
  function flipCard(index) {

    /// If cards are in found pair do nothing (exit from function)
    for (var i = 0; i < foundPairs.length; i++) {
      if (index === foundPairs[i]) {
        return;
      }
    }

    /// If single card in active card and clicking on same card do nothing 
    if (activeCards[0] === index) {
      console.log("clicked on same card");
      return;
    }

    if (activeCards.length === 0) {
      setActiveCards([index]);
    }

    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        setPairCounter(counterPair + 1); // alert('You found a pair');
        setFoundPairs([...foundPairs, firstIndex, secondIndex]);
        setDatenow(Date.now());
      }

      setActiveCards([...activeCards, index]);
    }

    if (activeCards.length === 2) {
      setActiveCards([index]); //third card ko flip karne k liye
      console.log("third");
    }
  }
  const logout = () => {
    // window.localStorage.removeItem("auth");
    // setState(null);
    // Router.push("/thankyou");
  };
  async function Gameover() {
    console.log("passing", counterPair, email);
    const data = axios
      .post("http://localhost:8000/api/game2", {
        score: counterPair,
        email,
      });
    // logout();
  }

  return (
    <UserRoute>
      <div className=".game2-main">


        <h3 className={"game2Heading"}>{counterPair}
          pairs found so far Time left :
          <Countdown
            date={Number(Datenow) + 15000}
            onComplete={Gameover}

          />
        </h3>

        <div className="board">
          {cards.map((card, index) => {
            const flippedToFront =
              activeCards.indexOf(index) !== -1 ||
              foundPairs.indexOf(index) !== -1; //foundPairs ko flip karaana h ya nhi karana k liye
            return (
              <div
                key={index}
                className={"card-outer " + (flippedToFront ? "flipped" : "")}
                onClick={() => flipCard(index)}
              >
                <div className="gamecard">
                  <div className="front">
                    <img src={card.src} alt={`img${index}`} />
                  </div>
                  <div className="back" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </UserRoute>
  );
}

export default Memorygame;

/*
import React,{useState} from 'react';
import Images from "./Images"
function Kuchbhi(){
  const [ cards , setCards ] = useState ( [...Images , ...Images ] ) ;

  return(
    <div >
      {cards.map((card))}
      hello <br/>
      <img src="" alt='hy'/>
    </div>
    
  )
}

export default Kuchbhi;
*/
