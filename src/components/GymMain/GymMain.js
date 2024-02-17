import React, { useRef, useEffect,useState } from 'react'
import { Environment,CameraControls,OrbitControls} from '@react-three/drei'
import {Gymfinal} from "../GymModel/Gymfinal.jsx"
import { degToRad } from 'three/src/math/MathUtils'
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber'

function GymMain() {

 //Setting up the reference and animation for camera zoom in on intro
     const controls = useRef();

     const intro= async()=>{
         controls.current.dolly(-35);
         controls.current.smoothTime=1.6
         controls.current.dolly(35,true);
     }
     
     useEffect(()=>{
         intro();
         gymViewHandler();
     },[])

//Declaring States and vector for Camera/Orbit Controls switch up and movement

    const [interval, setInterval] = useState(false);
    const vec = new THREE.Vector3();


//Declaring Functions/States For Gym Zoom in
    const [gymView,setGymView] = useState(false);

    const gym = useRef();

    const gymViewHandler = () => {
        setTimeout(setGymView(!gymView), 2000)
        if(!interval){
            setInterval(true)
        }if(interval){
            setTimeout(()=>{setInterval(false)},2000)
        }
    }
    useFrame(state=>{
        if(gymView){
            state.camera.lookAt(gym.current.position);
            state.camera.position.lerp(vec.set(-4,6,-25),0.03);
            state.camera.updateProjectionMatrix();
        }
        if(!gymView){
            state.camera.position.lerp(vec.set(0,2,25),0.05);
            state.camera.updateProjectionMatrix();
        }
        return null
    })

  return (
    <>
    {!interval ? <CameraControls ref={controls} />:<OrbitControls  />}
    <Environment preset='sunset' />
    <group ref={gym} rotation-y={degToRad(110)} position={[0,0,0]}>
        <Gymfinal />
    </group>
    </>
  )
}

export default GymMain