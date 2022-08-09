import '../intro/styles/login.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div style={{height: "100vh", backgroundColor: "whitesmoke"}}>
      <div className="judul"><h1>JUDUL</h1></div>
      <div className="box1 shadow">
        <div className="text">
          <h1>Selamat Datang</h1>
          <p className="spasi">Silahkan login</p> 
        </div>
        <div className="cont d-grid gap-3">
          <div className="form-floating mt-4">
            <input type="email" className="form-control" name="username" id="Email" placeholder="name@example.com"/>
            <label for="Email">Username or Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="Password" placeholder="Password"/>
            <label for="Password">Password</label>
            {/* <p className="p-1"><a href="#" ><small>Forgot Password ?</small></a></p> */}
          </div>
          <div className="d-grid gap-2 col-md-6 mx-auto my-5">
            <button className="btn btn-primary" type="button">Masuk</button>
            <button className="btn btn-primary" type="button">Buat Akun</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
