import React from "react";
import style from "./ExtraInfoForm.module.css";
import { userCredentialsStore, pendingStore, userStore } from '../../store';
import axios from "axios";
import {useNavigate} from "react-router-dom"


function ExtraInfoForm() {
    
  const navigate=useNavigate()

  const {
    age,
    height,
    weight,
    gender,
    phoneNumber} = userCredentialsStore();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        userCredentialsStore.setState({[name]:value})
      }

    const { pending, setPending} = pendingStore();
    const { setUser } = userStore();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setPending();
         axios.put(`${process.env.REACT_APP_BACK_END_URL}users/extrainfo`, {
          age,
          height,
          weight,
          gender,
          phoneNumber
        }).then((res)=>{
          setUser(res.data.payload);
          setPending();
          navigate('/');
        }).catch((err)=>{console.log(err.message)});
        }
  return (
    <section className={style.wrapper}>
      <h1 className={style.header}>Please Enter Your Information Below</h1>
      <form className={style.container} method="POST">
        <div className={style.inpContainer}>
          <label htmlFor="fullname" className={style.label}>
            Age
          </label>
          <input
            id="age"
            className={style.inp}
            placeholder="enter your age"
            type="number"
            name="age"
            onChange={handleChange}
          />
        </div>
        <div className={style.inpContainer}>
          <label htmlFor="height" className={style.label}>
            height/cm
          </label>
          <input
            id="height"
            className={style.inp}
            placeholder="enter your height"
            type="number"
            name="height"
            onChange={handleChange}
          />
        </div>
        <div className={style.inpContainer}>
          <label htmlFor="weight" className={style.label}>
            weight/kg
          </label>
          <input
            id="weight"
            className={style.inp}
            placeholder="enter your weight"
            type="number"
            name="weight"
            onChange={handleChange}
          />
        </div>
        <div className={style.inpContainer}>
          <label htmlFor="phoneNumber" className={style.label}>
            Phone Number
          </label>
          <input
            id="phoneNumber"
            className={style.inp}
            placeholder="enter your number"
            type="number"
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <div className={style.inpContainer}>
          <label htmlFor="gender" className={style.label}>
            Gender
          </label>
            <select required id="gender" name="gender" onChange={handleChange} className={style.genderSelector}>
                <option value={'male'} className={style.option} selected>Male</option>
                <option value={'female'} className={style.option}>Female</option>
            </select>
        </div>
        {!pending?
        <button type='submit' onClick={handleSubmit} className={style.submit}>Continue</button>:
        <button disabled className={style.submitdisabled}>Redirecting</button>
        }
      </form>
    </section>
  );
}

export default ExtraInfoForm;
