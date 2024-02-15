import React from 'react'
import style from "./SignupForm.module.css"
import {Link , useNavigate} from "react-router-dom"
import { userCredentialsStore, passwordStore, pendingStore, userStore } from '../../store';
import eye from "../../assets/icons/eye.svg";
import closedEye from "../../assets/icons/closedEye.svg";
import google from "../../assets/icons/google.svg";
import axios from "axios";

function SignupForm() {

  const navigate=useNavigate();

  // user Inputs handling
  const {
  fullname,
  email,
  password,
  phoneNumber,
  profilePicture,
  photoURL,
  age,
  height,
  weight,
  role,
  gender} = userCredentialsStore();
  const handleChange = (e)=>{
    const {name, value} = e.target;
    userCredentialsStore.setState({[name]:value})
  }

  //password visibility handling
const {visible, setVisible} = passwordStore();

//loading states
const { pending, setPending} = pendingStore();

//set user data
const { user,setUser } = userStore()

//send data to the backend Normal Sign up
const handleSubmit = (e)=>{
  e.preventDefault();
  setPending();
   axios.post(`${process.env.REACT_APP_BACK_END_URL}users/signup`, {
    fullname,
    email,
    password,
    phoneNumber,
    profilePicture,
    role:"user",
    gender}).then((res)=>{
    setUser(res.data.token.data);
    setPending();
    navigate('/');
  }).catch((err)=>{console.log(err.message)});
  }

  return (
    <section className={style.wrapper}>
      <h1 className={style.header}>
          Time To make a Change !
        </h1>
        <p className={style.subHeader}>
          Sign up to unlock your full potential
        </p>
        <form className={style.container} method="POST">
        <label htmlFor='fullname' className={style.label}>
          Full Name
        </label>
          <input id='fullname' className={style.inp} placeholder='enter your name' type='text' name='fullname' onChange={handleChange} />
        <label htmlFor='email' className={style.label}>
          Email
        </label>
          <input id='email' className={style.inp} placeholder='enter your email' type='email' name='email' onChange={handleChange} />
        <label htmlFor='password' className={style.label}>
          Password
        </label>
          <input id='password' className={style.inp} placeholder='enter your password' type={visible ? 'text':'password'} name='password' onChange={handleChange} required/>
            <img src={visible ? eye : closedEye} alt="show password" className={style.eye} onClick={()=>setVisible()} />
            <label htmlFor='gender' className={style.label}>
          Gender
        </label>
          <select id='gender' className={style.inp} placeholder='enter your gender' type='select' name='gender' onChange={handleChange}>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
          </select>
          <label htmlFor='profilepicture' className={style.label}>
          Upload your picture
        </label>
          <input id='profilepicture' className={style.inp} type='file' name='profilePicture' onChange={handleChange} />
        {!pending?
        <button type='submit' onClick={handleSubmit} className={style.submit}>Sign up</button>:
        <button disabled className={style.submitdisabled}>Signing you up</button>
        }
        <Link to='/forgotpassword' className={style.forgotPassword}>Forgot your password?</Link>
        <div style={{display:"flex",alignItems:"center", backgroundColor:"white"}}>
          <hr style={{display:"inline-block", width:"100px"}} />
          <span style={{opacity:"0.6", margin:"0 20px", backgroundColor:"white"}}>or</span>
          <hr style={{display:"inline-block", width:"100px"}} />
        </div>
        <p className={style.googleTxt}>Sign up using <button type='submit' className={style.googleBtn}><img className={style.googleicon} src={google} alt='google' /> </button></p>
      </form>
      <p className={style.signinTxt}>already have an account ? <Link to='/login' className={style.signinLink}>Sign in now !</Link></p>
    </section>
  )
}

export default SignupForm