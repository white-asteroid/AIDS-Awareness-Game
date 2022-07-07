import React from 'react';
import './Game2.css';
// import { card } from 'react-bootstrap';
import {useState} from 'react';
// import p1 from "../game2/Img/img2.jpg";
import Images from "./Images"
import {shuffle, values} from 'lodash';
// class Images{
//   image1= "./assets/img1.webp";
// }
function Memorygame() { 
    const [ cards , setCards ] = useState (shuffle([...Images ,...Images]));
    const [activeCards, setActiveCards]= useState([]);
    const [foundPairs, setFoundPairs] =useState([]);
    const [counterPair, setPairCounter]= useState(0);
    function flipCard(index){

      if(activeCards.length=== 0){
        setActiveCards([index]);
      }

      if(activeCards.length=== 1){
        const firstIndex = activeCards[0];
        const secondIndex = index;

        if(cards[firstIndex] === cards[secondIndex]){
          setPairCounter(counterPair+1)// alert('You found a pair');
          setFoundPairs([...foundPairs, firstIndex, secondIndex])
        }

      setActiveCards([...activeCards, index]);
      }

      if(activeCards.length=== 2){
        setActiveCards([index]); //third card ko flip karne k liye
      }
    }

  return (
   <div> 
        <h3>{counterPair} pairs found so far</h3>
       <div className="board">
         {cards.map ( ( card, index ) => {
          const flippedToFront = (activeCards.indexOf(index)!==-1) || foundPairs.indexOf(index)!== -1; //foundPairs ko flip karaana h ya nhi karana k liye
         return(
           <div key={index} className = {"card-outer " + ( flippedToFront ? 'flipped' : '') } onClick={()=> flipCard(index)}>
             <div className ="card">
              <div className ="front">
                <img src={card} alt = {`img${index}`}/>
              </div>
              < div className ="back"/>
           </div>
        </div>
        );
          })}
       </div>
   </div>
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