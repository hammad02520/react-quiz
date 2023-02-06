import React, { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import "../login&signup/login.css"
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase";
const SignUp = () => {
  const [errorMessage, seterrorMessage] = useState("")
  const navigate = useNavigate()
  const SignUphandeler = () => {
    if (!value.name || !value.email || !value.password) {
      seterrorMessage("Fill all Fields correctly")
      return;
    }
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((res) => {
        console.log(res)
        localStorage.setItem("login", auth.currentUser.uid)
        localStorage.setItem("userLoggedIn",true)
        navigate('/quiz')
      }).catch((error) => {
        console.log("Error===>", error)
        seterrorMessage(error.message)
      })

    // console.log(value)
  }
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>

      <div className="main-login-container">

        <div className="login-container">

          <h1>Signup</h1>
          <b>{errorMessage}</b>
          <Input onChange={(e) =>
            setValue((prev) => ({ ...prev, name: e.target.value }))
          } className="myInput" size="large" placeholder="Username" prefix={<UserOutlined />} />
          <Input onChange={(e) =>
            setValue((prev) => ({ ...prev, email: e.target.value }))
          } className="myInput" type="email" placeholder="Email" />
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
          <Link onClick={SignUphandeler} to="/signup" className="log-btn" type="primary">SignUp</Link>
          <Link className="linkto" to="/login">Already have an account?</Link>
        </div>
      </div>
    </>

  )
}
export default SignUp;