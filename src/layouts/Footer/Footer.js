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
            <li className={style.item}>
            <a className={style.reference} href="https://www.freepik.com/free-ai-image/close-up-athlete-training_72628484.htm#query=fitness&position=49&from_view=search&track=sph&uuid=06a34531-e3f9-4253-a14b-18473a936e66">Image by freepik</a>
            </li>
            <li className={style.item}>
            Image by <a className={style.reference} href="https://www.freepik.com/free-photo/modern-gym-composition-with-sport-elements_3376861.htm#query=fitness%20pink&position=28&from_view=search&track=ais&uuid=5a32794f-d1e1-4f08-a581-f66fcaf75aec">Freepik</a>
            </li>
            <li className={style.item}>
            <a className={style.reference} href="https://www.freepik.com/free-photo/female-athlete-training-hard-gym-fitness-healthy-life-concept_19827280.htm#query=gym%20girl&position=34&from_view=search&track=ais&uuid=4fb50ac2-e213-4014-a271-f1a0827577ed">Image by master1305</a> on Freepik
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
          </ul>
      </aside>
      </footer>
  )
}

export default Footer