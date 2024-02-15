import { create } from 'zustand'

export const menuStore = create((set) => ({
  open:false,
  openClose: () => set((state) => ({ open: !state.open })),
}))

export const userCredentialsStore = create((set)=>({
    fullname:"",
    email:"",
    password:"",
    phoneNumber:null,
    profilePicture:"",
    photoURL:"",
    age:null,
    height:null,
    weight:null,
    role:"user",
    gender:"",
}))