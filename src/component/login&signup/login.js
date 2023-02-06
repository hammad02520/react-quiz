import React, { useState } from "react";
import { Input, Space } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "../login&signup/login.css"
const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, seterrorMessage] = useState("")
  const [value, setValue] = useState({
    email: "",
    password: "",
  })
  const Loginhandeler = () => {
    if (!value.email || !value.password) {
      seterrorMessage("Fill all Fields correctly")
      return;
    }
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((res) => {
        let uid = auth.currentUser.uid
        console.log(res)
        localStorage.setItem("login", uid)
        localStorage.setItem("userLoggedIn",true)
        console.log(auth.currentUser.uid)
        navigate('/quiz')
      }).catch((error) => {
        console.log("Error===>", error)
        seterrorMessage(error.message)
      })
  }
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <div className="main-login-container">
        <div className="login-container">
          <h1>Login</h1>
          <Input
            onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            }
            className="myInput" type="email" placeholder="Email" />
          <Space direction="horizontal">
            <Input.Password
              onChange={(e) =>
                setValue((prev) => ({ ...prev, password: e.target.value }))
              }
              className="myInput"
              placeholder="input password"
              visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
            />
          </Space>
          <b>{errorMessage}</b>
          <Link onClick={Loginhandeler} to="/login" className="log-btn" type="primary">Login</Link>
          <Link className="linkto" to="/signup">Create new account?</Link>
        </div>
      </div>
    </>

  )
}
export default Login;