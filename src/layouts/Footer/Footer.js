import React from 'react'
import style from "./Footer.module.css"

function Footer() {
  return (
    <footer className={style.wrapper}>
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