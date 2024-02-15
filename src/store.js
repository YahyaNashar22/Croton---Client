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