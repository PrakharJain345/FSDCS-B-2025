import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({logData}) {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  function verification(e) {
    e.preventDefault();
    console.log(logData);
    // alert(email + " " + password);
//     if (email === logData.email) {
//       if (password === logData.password) {
//         alert("Login Successful");
//       } else {
//         alert("Invalid Password");
//       }
//     } else {
//       alert("User not registered");
//     }
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button onClick={verification}  className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;