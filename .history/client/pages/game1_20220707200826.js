import React, {useState ,useContext}from "react";
// import QuestionsList from "../component/game1_components/QuestionsList";
import QuestionsList from "../component/game1_components/QuestionsList";
import{v4 as uuidv4} from "uuid";
// import {Helmet} from "react-helmet";
// import "./Game1.module.scss";
// import {useContext} from "react";
import { UserContext } from "../context";
import UserRoute from "../component/routes/UserRoutes";

const [state] = useContext(UserContext);

function Game1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  function handleCorrectAnswer(iscorrect) {
    if (true) {
      //setScore(score +1);
      if (iscorrect)
        setScore(score + 1);
      setClicked(true);
      // console.log("wrong :" + iscorrect);
      // console.log("good");
    }
    else {
      console.log("wrong :" + iscorrect);
    }

  }
  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionsList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
      const Gdata = await axios
      .post("http://localhost:8000/api/game1", {
        score,
      })
      .then(res){
        console.log("done");
      };
    
  };


  return (
    <UserRoute>
    <div className=" main-body">
  
    <div className="app-wrapper">
    
      {showScore ? (
        <div>
          <div className="completed">Completed!</div>
          <div className="score-section">
            Your Score: {score}/{QuestionsList.length}
          </div>
        </div>
      ) : (
        <div>
          <div className="question-section-wrapper">
            <div className="question-count">
              Question  {currentQuestion + 1} of {QuestionsList.length}
            </div>
            <div className="question">
              {QuestionsList[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section-wrapper">
            {QuestionsList[currentQuestion].answersList.map((answer) => (
              <li className="answer-list" key={uuidv4()}>
                <button
                  disabled={clicked}
                  className={`answer-button ${clicked && answer.iscorrect ? "correct" : ""}`}
                  onClick={() => handleCorrectAnswer(answer.iscorrect)}
                >
                  {answer.answer}
                </button>
              </li>
            ))}
          </div>
          <div>
            <button
              className="next-button"
              onClick={handleNextQuestion}
              disabled={!clicked}
            >Next</button>
          </div>
        </div>
      )}
    </div>
    </div>
    </UserRoute>
  );
}
export default Game1;