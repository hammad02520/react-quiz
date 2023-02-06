import React from "react";
import "../home/home.css"
import { Link } from "react-router-dom";
import Fullbackground from "../background/Fullbackground"
const Home = () => {

  return (
    <>
      <Fullbackground />
      <div className="main-homeDiv">

        <div className="left-text">
          <div>
            <h1>Hello There!</h1>
            <p>Welcome to my Web Quiz</p>
            <hr />
            <p>You get 1 point for every correct answer, at the end of each quiz you get your total score.</p>
          </div>
        </div>
        <div className="right-img">
          <img className="img" alt="" src="https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9621.jpg?w=1380&t=st=1675151659~exp=1675152259~hmac=140dcf911dda183d76d0424606eaf3cbc3e8f08ce47b147ad0c988194fab7927" />
          <h2 className="msg">For new user first you will register and enjoy the Quiz.</h2>
          <Link className="register-btn" to={"/login"}>Login & SignUp</Link>

        </div>

      </div>

    </>
  )
}
export default Home;