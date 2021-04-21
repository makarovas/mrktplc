import React, {useState} from "react";
import {toast} from "react-toastify"
import {loginAction}from '../actions/auth'



export default function Login() {
  const [state,setState] = useState();

  
  return <><h1 className="container-fluid p-5 text-center bg-secondary" >Login</р>
  <div className="container">
    <div className="row">
      <div className="col-md-6 offest-md-3">
        <LoginForm/>
      </div>
    </div>
  </div>
  </>;
}
