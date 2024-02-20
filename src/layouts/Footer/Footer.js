import React from 'react'
import style from "./Footer.module.css"
import { useLocation } from 'react-router-dom'

function Footer() {

  const location = useLocation();

  return (
    <footer className={location.pathname==='/body' || location.pathname==='/mind'?style.disappear: style.wrapper}>
      <aside className={style.left}>
          <h3 className={style.header}>Who am I</h3>
          <p className={style.content}>
          Yahya Nashar, a Passionate Junior Full Stack Developer Experienced in MERN Stack, Sequelize, Phaser.js And ThreeJS. The aim is to Build Innovative Solutions for an Advanced Digital Future. 
          </p>
      </aside>
      <aside className={style.middle}>
          <h3 className={style.header}>Contributions</h3>
          <ul className={style.list}>
            <li className={style.item}>
            loading animation was taken from <a className={style.reference} href='https://loading.io/'>loading.io</a>
            </li>
            <li className={style.item}>
            illustrations were taken from <a className={style.reference} href="https://storyset.com/">storyset.com</a>
            </li>
            <li className={style.item}>
            Modular Gym <a className={style.reference} href="https://skfb.ly/6VTUu"> by Kristen Brown </a> is licensed under Creative Commons Attribution <a className={style.reference} href="http://creativecommons.org/licenses/by/4.0/">sketchfab.com</a>.
            </li>
            <li className={style.item} >
                Desk Model <a className={style.reference} href='https://www.blendswap.com/blend/28232'>blendswap.com</a> by pinidumelan
            </li>
            <li className={style.item}>
            Sound Effect from <a className={style.reference} href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=72231">Pixabay</a>
            </li>
            <li className={style.item}>
            <a className={style.reference} href="https://www.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_41368279.htm#query=fitness%20background&position=19&from_view=search&track=ais&uuid=64334f99-644a-45bf-bc81-d44bbe48018c">Image by chandlervid85</a> on Freepik
            </li>
            <li className={style.item}>
            <a className={style.reference} href="https://www.freepik.com/free-ai-image/international-day-education-scene-with-fantasy-style_94193009.htm#query=library&position=16&from_view=search&track=sph&uuid=6f34f319-c95a-46e6-a74d-ade443742998">Image by freepik</a>
            </li>
          </ul>
      </aside>
      <aside className={style.right}>
          <h3 className={style.header}>External Links</h3>
          <ul className={style.list}>
            <li className={style.item}>
            <a className={style.reference} href='https://www.linkedin.com/in/yahya-nashar-693456297/'>LinkedIn</a>
            </li>
            <li className={style.item}>
            <a className={style.reference} href='https://github.com/YahyaNashar22'>github</a>
            </li>
            <li className={style.item}>
            <a className={style.reference} href="https://www.freepik.com/free-photo/3d-render-dumbbells-set-realistic-detailed-close-up-view-isolated-sport-element-fitness-dumbbell-design_20623508.htm#query=fitness%20background&position=14&from_view=keyword&track=ais&uuid=89b0e55e-8aec-4a9e-a9fc-65bf44d7a66b">Image by Rochak Shukla</a> on Freepik
            </li>
          </ul>
      </aside>
      </footer>
  )
}

export default Footer