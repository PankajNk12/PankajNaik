import React ,{useState} from 'react';
import './login.css'
const Login=()=>
{
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const handleSubmit=(e)=>
{
    e.preventDefault();
    if(!email || !password){
        alert ("enter your email Id and password");
        return
    }

    if (email==="cs22pankaj@svpkumta.in" && password==="admin"){
        alert("Login sucessful");
        return
    }
    else{
        alert("please try one s agin");
    }
}
return (
    <>
    <div className="login">
        <from onSubmit={handleSubmit}>
            <h2 >
                LOGIN FORM
            </h2>
            <div className="Input-Group">
                <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="Input-Group">
            <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <button onClick={handleSubmit}>Login</button>

    </from>
    </div>
    </>
)
}

export default Login;