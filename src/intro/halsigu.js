import React from "react";
import "./styles/halsigu.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function HalSigU(){
    return(
        <body>
            <div style={{backgroundColor:"#fff", padding:30, borderRadius:8}}>
            <form className="row needs-validation bord shadow-sm" novalidate>{/* g-3 */}
                <div className="col-md-12">
                    <h3 className="gaya text-center">Silahkan Daftar</h3>
                </div>
                <div className="col-md-12">
                    <label for="Name" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="Name" required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                    <label for="Username" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="Username" name="username" aria-describedby="inputGroupPrepend" required/>
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                </div>
                <div className="col-md-12">
                    <label for="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="Email" required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                    <label for="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="Password" required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                </div>
                <div className="col-12 boxx">
                    <button className="btn btn-warning" type="submit">Daftar</button>
                </div>
            </form>
            </div>
        </body>
    );
}
export default HalSigU;