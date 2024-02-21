import React from 'react'
import style from "./LoginForm.module.css"
import {Link , useNavigate} from "react-router-dom"
import { userCredentialsStore, passwordStore, pendingStore, userStore } from '../../store';
import eye from "../../assets/icons/eye.svg";
import closedEye from "../../assets/icons/closedEye.svg";
import google from "../../assets/icons/google.svg";
import axios from "axios";
import { auth, provider } from "../../firebase.js";
import { signInWithPopup } from "@firebase/auth";

function LoginForm() {

  const navigate=useNavigate();

  // user Inputs handling
const {email, password} = userCredentialsStore();
const handleChange = (e)=>{
  const {name, value} = e.target;
  userCredentialsStore.setState({[name]:value})
}

//password visibility handling
const {visible, setVisible} = passwordStore();

//loading states
const { pending, setPending} = pendingStore();

//set user data
const { setUser } = userStore()

//send data to the backend
const handleSubmit = (e)=>{
e.preventDefault();
setPending();
 axios.post(`${process.env.REACT_APP_BACK_END_URL}users/login`, {email:email, password:password}).then((res)=>{
  console.log(res)
  setUser(res.data.token.data);
  setPending();
  navigate('/');
}).catch((err)=>{console.log(err.message)});
}

//GOOGLE SIGN UP

const handleGoogle = () => {
  signInWithPopup(auth, provider)
    .then((data) => {
      setPending()
      axios
        .post(
          `${process.env.REACT_APP_BACK_END_URL}users/gsign`,
          {
            fullname: data.user.displayName,
                email: data.user.email,
                photoURL: data.user.photoURL,
                role: "user",
          }
        )
        .then((res) => {
          setPending();
          if (res) {
            setUser(res.data.userToken.data);
            setPending();
          } else {
            setUser({});
            setPending();
          }
          navigate("/");
        });
    })
    .catch((err) => {
      setPending();
      if (err.code === "auth/popup-closed-by-user") {
        console.log("exited the google auth");
      }
    });
};

  return (
    <section className={style.wrapper}>
        <h1 className={style.header}>
          Ready to get in shape ?
        </h1>
        <p className={style.subHeader}>
          Kindly Enter Your Details Below
        </p>
      <form className={style.container} method="POST">
      <div className={style.inpContainer}>
        <label htmlFor='email' className={style.label}>
          Email
        </label>
          <input id='email' className={style.inp} placeholder='enter your email' type='email' name='email' onChange={handleChange} />
          </div>
          <div className={style.inpContainer}>
        <label htmlFor='password' className={style.label}>
          Password
        </label>
          <input id='password' className={style.inp} placeholder='enter your password' type={visible ? 'text':'password'} name='password' onChange={handleChange} required/>
            <img src={visible ? eye : closedEye} alt="show password" className={style.eye} onClick={()=>setVisible()} />
            </div>
        {!pending?
        <button type='submit' onClick={handleSubmit} className={style.submit}>Log in</button>:
        <button disabled className={style.submitdisabled}>Logging you in</button>
        }
        <Link to='/forgotpassword' className={style.forgotPassword}>Forgot your password?</Link>
        <div style={{display:"flex",alignItems:"center", backgroundColor:"white"}}>
          <hr style={{display:"inline-block", width:"100px"}} />
          <span style={{opacity:"0.6", margin:"0 20px", backgroundColor:"white"}}>or</span>
          <hr style={{display:"inline-block", width:"100px"}} />
        </div>
        <p className={style.googleTxt}>log in using <button type='button' onClick={handleGoogle} className={style.googleBtn}><img className={style.googleicon} src={google} alt='google' /> </button></p>
      </form>
      <p className={style.signupTxt}>Don't have an account ? <Link to='/signup' className={style.signupLink}>Sign up now !</Link></p>
      <Link to='/' className={style.home}>Back to home page</Link>
    </section>
  )
}

export default LoginForm