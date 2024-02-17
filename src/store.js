import { create } from 'zustand'

export const menuStore = create((set) => ({
  open:false,
  openClose: () => set((state) => ({ open: !state.open })),
}))

export const userCredentialsStore = create((set)=>({
    fullname:null,
    email:null,
    password:null,
    phoneNumber:null,
    profilePicture:null,
    photoURL:null,
    age:null,
    height:null,
    weight:null,
    role:"user",
    gender:null,
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