import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import './login.css';

function Login(props) {
    const[username, setUserame] = useState();
    const[password, setPassword] = useState();

    let navigate = useNavigate();

    const ValidateLogin = async(data) => {
        console.log("working", username, password)

        try {
            const res = await axios.post(`https://localhost:1337/api/login`,{
                username:username,
                password:password
            } ,{
                headers: {
                    "Content-Type": "application/json"
                },
            })
            localStorage.setItem("token", res.data.token)
            // setmsg(res.data.message)
            return navigate('/dashboard')
            
        } catch (err) {
            console.log(err);
        }
        
    };

    
    return (
        <>
        
        <div className='container'>
            <h1>WElCOME</h1>
        <h2>ENTER LOGIN CREDENTIALS</h2>
        <form>
            <label >Username</label>
            <br></br>
            <br></br>
            <input value={username}
            onChange={(text) => setUserame(text.target.value)}
             type="text"
             username="username" 
             placeholder='Enter Username' />
            <br></br>
            <br></br>
            <label >Password</label>
            <br></br>
            <input value={password}
            onChange={(text) => setPassword(text.target.value)}
             type="password" 
             name="pswd"
             placeholder='Enter Password' />
            <br></br>
            <br></br>
            <a href="#">Forgot Password</a>
            <br></br>
            <button className='loginbutton' onClick={() => ValidateLogin("working")}>Submit</button>
                <div className="link">Not a Member?<Link className="link" to="/signup">SignUp Here</Link></div>
        </form>
    </div>
    </>
    );
}

export default Login;