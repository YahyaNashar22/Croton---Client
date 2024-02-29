import React, {useState} from 'react'
import style from "./CalculateProteinNeeds.module.css"

function CalculateProteinNeeds() {

    const [formData, setFormData] = useState({
        weight:0,
        group:0,
        proteinNeed:0,
    });
    const handleChange = (e)=>{
        const{name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const calculateProteinIntake =()=>{
        const result = parseFloat(formData.weight) * parseFloat(formData.group);
        setFormData({
            ...formData,
            proteinNeed: result
          });
    }

  return (
    <section className={style.wrapper}>
        <h1 className={style.header}>
            Calculate Your Protein Needs
        </h1>
        <table className={style.table}>
            <thead className={style.tableHead}>
                <tr className={style.tableRow}>
                    <th className={style.tableHeaders}>Group</th>
                    <th className={style.tableHeaders}>Protein intake <span className={style.grey}>{"("}gram protein per kg bodyweight{")"}</span></th>
                </tr>
            </thead>
            <tbody className={style.tableBody}>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Most Adults</td>
                    <td className={style.tableContent}>0.8</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Non Vegeterian Endurance Athletes</td>
                    <td className={style.tableContent}>1.2 to 1.4</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Non Vegeterian Strength Athletes</td>
                    <td className={style.tableContent}>1.6 to 1.7</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Vegeterian Endurance Athletes</td>
                    <td className={style.tableContent}>1.3 to 1.5</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Vegeterian Strength Athletes</td>
                    <td className={style.tableContent}>1.7 to 1.8</td>
                </tr>
            </tbody>
        </table>
        <p className={style.formula}>
            Weight {"("}kg{")"} x Protein intake = Protein Need
        </p>
        <div className={style.calculatorContainer}>
          <select className={style.groupSelector} name='group' onChange={handleChange}>
            <option className={style.option} defaultValue=''>Select group</option>
            <option className={style.option} value={0.8}>Most Adults</option>
            <option className={style.option} value={1.3}>Non Vegeterian Endurance Athletes</option>
            <option className={style.option} value={1.6}>Non Vegeterian Strength Athletes</option>
            <option className={style.option} value={1.4}>Vegeterian Endurance Athletes</option>
            <option className={style.option} value={1.7}>Vegeterian Strength Athletes</option>
          </select>
          X
          <input className={style.calculator} placeholder='weight' type='number' name='weight' onChange={handleChange} />
          <button className={style.calculate} type='button' onClick={calculateProteinIntake}>Calculate!</button>
          {
            formData.proteinNeed?
            <p className={style.result}>Your Protein Need is : {formData.proteinNeed.toFixed(2)} grams</p>
            :
            <p className={style.result}>Input your data above</p>
          }
        </div>
    </section>
  )
}

export default CalculateProteinNeeds