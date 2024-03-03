import React from 'react'
import style from "./PrepareDietPlan.module.css"

function PrepareDietPlan() {
  return (
    <section className={style.wrapper}>
        <h1 className={style.header}>
            How To Prepare a Diet Plan ?
        </h1>
        <article className={style.article}>
            <p className={style.articleContent}>
                After calculating the energy / calories  needs, a balanced diet plan is prepared.<br/>
                According to the recommendations, we have to consume:
            </p>
            <ul className={style.macrosList}>
                <li className={style.macro}>
                    <span className={style.bar}></span><span className={style.white}>50% Carb</span>ohydrates
                </li>
                <li className={style.macro}>
                <span className={style.bar}></span>30% Lipids
                </li>
                <li className={style.macro}>
                <span className={style.bar}></span>20% Proteins
                </li>
            </ul>
            <p className={style.articleContent}>
            of total daily expenses per day.<br/>
            </p>
        </article>
        <p className={style.example}>example of a 1500 calories diet</p>
        <table className={style.table}>
            <thead className={style.tableHead}>
                <tr className={style.tableRow}>
                    <th className={style.tableHeaders}>Macro</th>
                    <th className={style.tableHeaders}>Amount</th>
                </tr>
            </thead>
            <tbody className={style.tableBody}>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>50% calories of carbohydrates <span className={style.formula}>1g carbohydrates = 4 calories</span> </td>
                    <td className={style.tableContent}>{"("}1500 x 50{")"}/100<br/>750 calories / 4 = 187.5g of carbs</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>30% calories of lipids <span className={style.formula}> 1g lipids = 9 calories</span></td>
                    <td className={style.tableContent}>{"("}1500 x 30{")"}/100<br/>450 calories / 9 = 50g of lipids </td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>20% calories of proteins <span className={style.formula}> 1g of proteins = 4 calories </span></td>
                    <td className={style.tableContent}>{"("}1500 x 20{")"}/100<br/>300 calories / 4 = 75g of proteins</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default PrepareDietPlan