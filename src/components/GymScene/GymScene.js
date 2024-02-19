import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import GymMain from '../GymMain/GymMain'
import style from "./GymScene.module.css"
import { Html } from '@react-three/drei'
import {changeColor} from "../../utils/gender"
import {userStore} from "../../store"

function GymScene() {

  const {user} = userStore();
  const colors = changeColor(user.gender);

  // Handling HTML anchor tags to show after intro animation
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowList(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={style.wrapper}>
    <Canvas camera={{position:[0,50,35], fov:42  }} >
    <fog attach='fog' args={['#0c0c0c', 15, 50]} />
    <GymMain />
    <group position={[2,5,-11]} rotation={[0,3.5,0]}>
    <Html className={showList?style.htmlContainer:style.none} >
      <h1 className={style.header}>What do you want to do today ?</h1>
      <a className={`${style.link} ${style[colors]}`} href='/exercises'>Check Exercises</a><br/>
      <a className={`${style.link} ${style[colors]}`} href='/trainingplans'>Check Training Plans</a><br/>
      <a className={`${style.homelink} ${style[colors]}`} href='/'>-Back-</a>
    </Html>
    </group>
    </Canvas>
    </section>
  )
}

export default GymScene