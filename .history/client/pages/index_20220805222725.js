// import styles from "css/home.module.css";
//to access global state 
import { useContext } from "react"
import { UserContext } from "../context";
//home page import
import Home from "../component/home";
export default function home(){
    const state = useContext(UserContext);
    console.log("Home state is ", state);
    return(
        <>
        <div className="container-fluid">
            <div className="row col-12" >
                {/* <h1>Home</h1> */}
                <Home />
               
            </div>
        </div>
        </>
    )
}