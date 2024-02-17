import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import DeskMain from '../DeskMain/DeskMain'
import style from "./DeskScene.module.css"
import poppins from "../../fonts/poppins.ttf"
import { Html, Text } from '@react-three/drei'

function DeskScene() {

  // Handling HTML anchor tags to show after intro animation
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowList(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <section className={style.wrapper} style={{backgroundColor:"black"}}>
    <Canvas camera={{position:[0,50,35], fov:42  }} style={{backgroundColor:"black"}} >
    <fog attach='fog' args={['#0c0c0c', 15, 50]} />
    <DeskMain />
    <group position={[5,5,14]} rotation={[-0.02,1.6,0]}>
    <Html className={showList?style.htmlContainer:style.none} >
      <h1 className={style.header}> what seems to be on your mind</h1>
      <a className={style.link} href='/books'>Read Books</a><br/>
      <a className={style.link} href='/games'>Play Games</a><br/>
      <a className={style.homelink} href='/'>-Back-</a>
    </Html>
    </group>
    </Canvas>
    </section>
  )
}

export default DeskScene