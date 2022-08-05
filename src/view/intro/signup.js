import '../intro/styles/signup.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  
  return (
    <div style={{height: "100vh", backgroundColor: "whitesmoke"}}>
      <div className="judul"><h1>JUDUL</h1></div>
      <div className="box1 shadow">
        <div className="text">
          <h1>Selamat Datang</h1>
          <p className="spasi">Silahkan daftar dibawah sini</p> 
        </div>
        <div className="cont">
          <div className="form-floating mb-3 mt-3">
            <input type="username" className="form-control" name="username" id="Username" placeholder="Username"/>
            <label for="Username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name="email" id="Email" placeholder="name@example.com"/>
            <label for="Email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="Password" placeholder="Password"/>
            <label for="Password">Password</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="Password" placeholder="Password"/>
            <label for="Password">Confirm Password</label>
          </div>
          <div className="d-grid gap-2 col-md-6 mx-auto my-5">
            <button className="btn btn-primary" type="button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
