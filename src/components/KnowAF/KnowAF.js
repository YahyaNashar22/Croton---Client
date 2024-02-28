import React from 'react'
import style from "./KnowAF.module.css"

function KnowAF() {
  return (
    <section className={style.wrapper}>
        <table className={style.table}>
            <thead className={style.tableHead}>
                <tr className={style.tableRow}>
                    <th className={style.tableHeaders}>Kind Of Activity</th>
                    <th className={style.tableHeaders}>AF For Men</th>
                    <th className={style.tableHeaders}>AF For Women</th>
                </tr>
            </thead>
            <tbody className={style.tableBody}>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Very Light Activity <span className={style.grey}>{"("}Old{")"}</span> </td>
                    <td className={style.tableContent}>1</td>
                    <td className={style.tableContent}>1</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Light Activity Physical <span className={style.grey}> Activity Of 20 min. 1 to 3 times per week</span></td>
                    <td className={style.tableContent}>1.11</td>
                    <td className={style.tableContent}>1.12</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Moderate Activity <span className={style.grey}> Physical Activity Of 30 to 60 min. 4 times per week</span></td>
                    <td className={style.tableContent}>1.25</td>
                    <td className={style.tableContent}>1.27</td>
                </tr>
                <tr className={style.tableRow}>
                    <td className={`${style.tableContent} ${style.tableRowHeader}`}>Heavy Activity <span className={style.grey}> Intense Physical Activity Of 60 min. or above 5 to 7 days per week</span></td>
                    <td className={style.tableContent}>1.48</td>
                    <td className={style.tableContent}>1.45</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default KnowAF