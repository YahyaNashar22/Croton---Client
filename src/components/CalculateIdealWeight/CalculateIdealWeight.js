import React, {useState} from 'react'
import style from "./CalculateIdealWeight.module.css"

function CalculateIdealWeight() {

    const [formData, setFormData] = useState({
        height:0,
        age:0,
        gender:null,
        idealWeight:null,
    });
    const handleChange = (e)=>{
        const{name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const calculateIdealWeightMan =()=>{
        const result = parseFloat(formData.height)-100 - ((parseFloat(formData.height)-150)/4) + (parseFloat(formData.age)/4);
        setFormData({
            ...formData,
            idealWeight: result
          });
    }
    const calculateIdealWeightWoman =()=>{
        const result = parseFloat(formData.height)-100 - ((parseFloat(formData.height)-150)/2) + (parseFloat(formData.age)/4);
        setFormData({
            ...formData,
            idealWeight: result
          });
    }
    
    const calculateIdealWeight = () =>{
        if(formData.gender==="male"){
            calculateIdealWeightMan()
        }
        if(formData.gender === "female"){
            calculateIdealWeightWoman()

        }
        if(!formData.gender){
            alert("please Select your gender !")
        }
    }

  return (
    <section className={style.wrapper}>
        <h1 className={style.header}>
            How To Calculate Ideal Weight ?
        </h1>
        <h2 className={style.subHeader}>
            For age {"<"} 20 years :
        </h2>
        <div className={style.ageBlock}>
        <div className={style.block}>
            <h3 className={style.gender}>
                Men:
            </h3>
            <p className={style.content}>
                152 cm → 50kg <br/>
                For 1 cm more than 152, we add 0.88 to 50kg<br/>
                For 1 cm less than 152, we reduce 0.88 from 50kg
            </p>
            </div>
            <div className={style.block}>
            <h3 className={style.gender}>
                Women:
            </h3>
            <p className={style.content}>
                152 cm → 45kg <br/>
                For 1 cm more than 152, we add 0.88 to 45kg<br/>
                For 1 cm less than 152, we reduce 0.88 from 45kg
            </p>
            </div>
        </div>
        <h2 className={style.subHeader}>
            For age {">"} 20 years :
        </h2>
        <div className={style.ageBlock}>
            <div className={style.block}>
            <h3 className={style.gender}>
                Men:
            </h3>
            <p className={style.content}>
                Ideal Weight = {"("}Height - 100 {")"} - {"["}{"("}Height -150{")"}/4{"]"} + {"["}{"("}Age - 20{")"}/4{"]"}
            </p>
            </div>
        <div className={style.block}>
            <h3 className={style.gender}>
                Women:
            </h3>
            <p className={style.content}>
                Ideal Weight = {"("}Height - 100 {")"} - {"["}{"("}Height -150{")"}/2{"]"} + {"["}{"("}Age - 20{")"}/4{"]"}
            </p>
        </div>
        </div>
        <div className={style.calculatorContainer}>
          <select className={style.genderSelector} name='gender' onChange={handleChange}>
            <option className={style.option} defaultValue=''>Select gender</option>
            <option className={style.option} value={"male"}>Man</option>
            <option className={style.option} value={"female"}>Woman</option>
          </select>
          <input className={style.calculator} placeholder='height' type='number' name='height' onChange={handleChange} />
          <input className={style.calculator} placeholder='age' type='number' name='age' onChange={handleChange} />
          <button className={style.calculate} type='button' onClick={calculateIdealWeight}>Calculate!</button>
          {
            formData.idealWeight?
            <p className={style.result}>Your ideal weight is : {formData.idealWeight.toFixed(2)} kg</p>
            :
            <p className={style.result}>Input your data above</p>
          }
        </div>
    </section>
  )
}

export default CalculateIdealWeight