import React,{useEffect,useState} from "react";
import "../intro/styles/hallog.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

function HalLog() {
    const [temp,setTemp] = useState()

    var dat = require('./Account.json')
   


    useEffect(()=>{
        var arr = []
        for (let index = 0; index < dat.length; index++) {
            const element = dat[index];
    
            arr.push(element)
            
        }
        setTemp(arr)
    },[])

    

        function log(){

            var username = document.getElementById("Username").value
            var password = document.getElementById("Password").value
            temp.map(item=>{
                if(username === item.username && password === item.password){
                    
                    console.log("berhasil")
                    return(<Link to="/Dashboard" active/>)
                }
                else if(username !== item.username && password === item.password){
                    // alert('username salah')
                }
                else if(username === item.username && password !== item.password){
                    // alert('password salah')
                }
                else{
                    // console.log("gagal")
                }
                
            })
            }
           


    return(
    <body className="body">
        <div style={{backgroundColor:"#fff", padding:30, borderRadius:8}}>
            <form className="bor shadow-sm">
                <h3 className="mb-4 font-weight-normal text-center p-2">Silahkan Login</h3>
                <div className="form-floating mb-3">
                    <input type="username" className="form-control" id="Username" placeholder="Username" name="username" required/>
                    <label for="Username">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="Password" placeholder="Password" name="password"/>
                    <label for="Password">Password</label>
                </div>
            </form>
            <p className="p-1 text-center my-2"><a href="#">Lupa Kata Sandi?</a></p>
            <Link to="/Dashboard" className="box"><button className="btn btn-warning shadow" type="button" style={{width: "200px"}} onClick={()=>log()}>Masuk</button></Link>
            <p className="text-center mt-5">Belum punya akun?<Link to="/HalSigU"><a href="#"> Daftar </a></Link>disini</p>
        </div>
    </body>
    );
}
export default HalLog;