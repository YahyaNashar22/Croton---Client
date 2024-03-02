import React, {useState} from 'react'
import style from "./CalculateBMR.module.css"

function CalculateBMR() {

  const [formData, setFormData] = useState({
    weight:0,
    height:0,
    age:0,
    BMR:null,
    gender:null
});

const handleChange = (e)=>{
    const{name, value}=e.target;
    setFormData({
        ...formData,
        [name]:value
    })
}
const calculateMaleBMR = () =>{
    const result = (parseFloat(formData.weight)*10 )+ (6.5*parseFloat(formData.height)) - (5 * parseFloat(formData.age)) + 5;
    setFormData({
        ...formData,
        BMR: result
      });
}
const calculateFemaleBMR = () =>{
  const result = (parseFloat(formData.weight)*10) + (6.5*parseFloat(formData.height)) - (4.330 * parseFloat(formData.age)) -161;
  setFormData({
      ...formData,
      BMR: result
    });
}
const  calculateBMR= ()=>{
  if(!formData.gender){
    alert("please specify the gender !")
  }
  if(formData.gender==="male"){
    calculateMaleBMR()
  }
  if(formData.gender==='female'){
    calculateFemaleBMR();
  }
}


  return (
    <section className={style.wrapper}>
        <h1 className={style.header}>
            How To Calculate BMR ?
        </h1>
        <article className={style.content}>
          <>
          <h2 className={style.contentHeader}>
            For Men : 
          </h2> 
          <p className={style.formula}>
            BMR ={"("}10 x weight/kg{")"} + {"("}6.5 x Height/cm{")"} - {"("}5 x age{")"} + 5
          </p>
          </>
          <>
          <h2 className={style.contentHeader}>
            For Women : 
          </h2>
          <p className={style.formula}>
          BMR ={"("}10 x weight/kg{")"} + {"("}6.5 x Height/cm{")"} - {"("}5 x age{")"} - 161
          </p>
          </>
        </article>
        <div className={style.calculatorContainer}>
          <select className={style.genderSelector} name='gender' onChange={handleChange}>
            <option className={style.option} defaultValue=''>Select Gender</option>
            <option className={style.option} value={'male'}>Male</option>
            <option className={style.option} value={'female'}>Female</option>
          </select>
          <input className={style.calculator} placeholder='weight' type='number' name='weight' onChange={handleChange} /> x
          <input className={style.calculator} placeholder='height' type='number' name='height' onChange={handleChange} /> x
          <input className={style.calculator} placeholder='age' type='number' name='age' onChange={handleChange} />
          <button className={style.calculate} type='button' onClick={calculateBMR}>Calculate!</button>
          {
            formData.BMR?
            <p className={style.result}>Your BMR is : {formData.BMR} Kcal/Day</p>
            :
            <p className={style.result}>Input your data above</p>
          }
        </div>
    </section>
  )
}

export default CalculateBMR