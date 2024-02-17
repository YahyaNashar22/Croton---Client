import React, { useRef, useEffect,useState } from 'react'
import { Environment,CameraControls,OrbitControls} from '@react-three/drei'
import { DeskModel } from '../DeskModel/Desk2'
import { degToRad } from 'three/src/math/MathUtils'
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber'

function DeskMain() {

 //Setting up the reference and animation for camera zoom in on intro
 const controls = useRef();

 const intro= async()=>{
     controls.current.dolly(-35);
     controls.current.smoothTime=1.6
     controls.current.dolly(35,true);
 }
 
 useEffect(()=>{
     intro();
     deskViewHandler();
 },[])

 //Declaring States and vector for Camera/Orbit Controls switch up and movement

 const [interval, setInterval] = useState(false);
 const vec = new THREE.Vector3();

 
//Declaring Functions/States For Gym Zoom in
const [deskView,setDeskView] = useState(false);

const desk = useRef();

const deskViewHandler = () => {
    setTimeout(setDeskView(!deskView), 2000)
    if(!interval){
        setInterval(true)
    }if(interval){
        setTimeout(()=>{setInterval(false)},2000)
    }
}
useFrame(state=>{
    if(deskView){
        state.camera.lookAt(desk.current.position);
        state.camera.position.lerp(vec.set(25,8,2),0.03);
        state.camera.updateProjectionMatrix();
    }
    if(!deskView){
        state.camera.position.lerp(vec.set(0,2,25),0.05);
        state.camera.updateProjectionMatrix();
    }
    return null
})

  return (
    <>
    {!interval ? <CameraControls ref={controls} />:<OrbitControls  />}
    <Environment preset='sunset' />
    <group ref={desk} rotation-y={degToRad(110)} position={[0,0,0]}>
        <DeskModel />
    </group>
    </>
  )
}

export default DeskMain