import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.scss"
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const signupacc = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/home");
        }).catch((err) => {
          console.log(err)
          alert("Error")
        })
    }

    return (
        <>
            <div className='wrapper__form'>
            </div>

            <form className='form__login'>
                <h1> Login </h1>
                <div>
                    <label> Email </label>
                    <input type="text" placeholder='Email'  onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                </div>

                <div className='btn__login'> <button onClick={signupacc}> Login </button> </div>
                <p> Don't have an account? <Link to="/signup">Signup</Link>  </p>
            </form>
        </>
    )
}
