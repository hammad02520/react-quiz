import 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
const PrivateRoute =  (props)=>{
    const {Component} = props
    const navigate = useNavigate()
      useEffect(()=>{
     let login = localStorage.getItem("login")
        if(!login){
           navigate('/home')
        }
    })
    return(
        <div>
            <Component />
        </div>
    )
}
export default PrivateRoute;