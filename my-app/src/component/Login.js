import React ,{useState, Usestate} from 'react';
import './login.css'
const Login=()=>
{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>

    {
        e.preventDefault();
        if (!email || !password)
        {alert("enter your email  and password ");return}
        
        if(email==="svpkumta@gmail.com" && password==="admin")
            {
            alret("Login successful");
            }
        else{
            alert("please try once again")
        }
}

return(
<>
<div className='login'>
    <from onSubmit={handleSubmit}>
        <h2> LOGIN PAGE </h2>
    EMAIL:<br/><input type="email" name="email" placeholder='enter yout email' on onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    PASSWORD:<br/><input type="password" name="password" placeholder='enter yout password' on onChange={(e)=>setPassword(e.target.value)}/>
    <br/>

    <button onClick={handleSubmit}>LOGIN</button>
    </from>
</div>
</>
)
}
export default Login;