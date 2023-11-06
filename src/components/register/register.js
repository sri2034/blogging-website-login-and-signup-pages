import React, {useState} from 'react'
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const history = useNavigate();

    const [user,setUser] = useState({
        name:"",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name,email,password,reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)) {
            axios.post("https://my-new-5a71.onrender.com/register", user).then( res => {
                alert(res.data.message)
                history("/login")
        })
        } else {
            alert("invalid input")
        }
        
    }

  return (
    <div className="register">
        <h1>Register</h1>
        <input type="name" name='name' value={user.name} placeholder='Enter your Name' onChange={ handleChange } />
        <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={ handleChange } />
        <input type="password" name='password' value={user.password} placeholder='Enter your password' onChange={ handleChange } />
        <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter your password' onChange={ handleChange } />
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={() => history("/login")}>Login</div>
    </div>
  )
}

export default Register