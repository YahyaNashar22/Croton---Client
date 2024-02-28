import React,{useState} from 'react'
import style from "./CalculateTEE.module.css"

function CalculateTEE() {

    const [formData, setFormData] = useState({
        BMR:0,
        AF:0,
        TEE:null
    });

    const handleChange = (e)=>{
        const{name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const calculate = () =>{
        const result = parseInt(formData.BMR) * parseInt(formData.AF);
        setFormData({
            ...formData,
            TEE: result
          });
    }
  return (
    <section className={style.wrapper}>
        <h2 className={style.header}>
            How To Calculate Your Calories Need ?
        </h2>
        <div className={style.formula}> TEE = BMR x AF</div>
        <div className={style.content}>
            <aside className={style.left}>
           <p className={style.description}>
                 <span className={style.constant}>TEE:</span> Total Energy Expenditure
           </p>
           <p className={style.description}>
                <span className={style.constant}>BMR:</span> Basal Metabolic Rate
            </p>
            <p className={style.description}>
                <span className={style.constant}>AF:</span> Activity Factor
            </p>
            </aside>
            <aside className={style.right}>
                <div className={style.upper}>
                <input type='number' className={style.calculator} name='BMR' onChange={handleChange} placeholder='BMR' />
                <span className={style.calculator}>x</span>
                <input type='number' className={style.calculator} name='AF' onChange={handleChange} placeholder='AF' />
                <button className={style.multiply} type='type' onClick={calculate}>Calculate!</button>
                </div>
                {
                    formData.TEE?
                    <p className={style.output} >The Result is: {formData.TEE} Kcal/day</p>
                    :
                    <p className={style.output}>Input your data above</p>
                }
            </aside>
        </div>
        <div className={style.information}>
            <article className={style.infoBlock}>
            <h3 className={style.subHeader}>
                What's your goal ?
            </h3>
            <p className={style.informationContent}>
                If you need to gain weight, you need to eat calories {">"} your Total Energy Expenditure <i className={style.green}>TEE</i>
            </p>
            </article>
            <article className={style.infoBlock}>
            <h3 className={style.subHeader}>
                What's your goal ?
            </h3>
            <p className={style.informationContent}>
                If you need to lose weight, you need to eat calories {"<"} your Total Energy Expenditure <i className={style.green}>TEE</i>
            </p>
            </article>
            <article className={style.infoBlock}>
            <h3 className={style.subHeader}>
                What's your goal ?
            </h3>
            <p className={style.informationContent}>
                If you need to balance your weight, no lose, no gain, you need to eat calories {"="} your Total Energy Expenditure <i className={style.green}>TEE</i>
            </p>
            </article>
        </div>
    </section>
  )
}

export default CalculateTEE