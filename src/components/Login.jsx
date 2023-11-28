import React from 'react'
import {useDispatch} from "react-redux";
import {login, logout} from "../features/User";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <button 
            onClick={() => 
              {dispatch
                    (login({name:"harry", age:23, email:"harry@gmail.com"}))}}
                    style={{margin:20, background:"#B5838D", border:"none", padding:8, borderRadius:5}}
        >
          Login
        </button>
                  
        <button 
            onClick={() => 
              {dispatch
                    (logout({name:"", age:0, email:""}))}}
                    style={{ background:"#B5838D", border:"none", padding:8, borderRadius:5}}
        >
          Logout
        </button>

    </div>
  )
}

export default Login