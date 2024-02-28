import { create } from 'zustand'

export const menuStore = create((set) => ({
  open:false,
  openClose: () => set((state) => ({ open: !state.open })),
}))

export const userCredentialsStore = create((set)=>({
    fullname:null,
    email:null,
    password:null,
    phoneNumber:0,
    profilePicture:null,
    photoURL:null,
    age:0,
    height:0,
    weight:0,
    role:"user",
    gender:"male",
    favPlans:[],
    favRecipes:[],
    favBooks:[],
    exerciseHistory:[]
}))

export const passwordStore = create((set)=>({
  visible:false,
  setVisible : ()=> set((state)=>({visible: !state.visible}))
}))

export const pendingStore = create((set)=>({
  pending:false,
  setPending: () =>set((state)=>({pending : !state.pending}))
}))

export const userStore = create((set)=>({
  user:{},
  setUser: (data)=>set(()=>({user: data}))
}))

export const clickSoundStore = create((set)=>({
  playSound:false,
  setPlaySound:()=>set(state=>({playSound:!state.playSound}))
}))