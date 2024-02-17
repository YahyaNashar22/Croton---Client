import { useEffect } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes.js';
import axios from 'axios';
import { userStore } from './store.js';

axios.defaults.withCredentials = true


function App() {

  const {user, setUser} = userStore();

  const  getUserData = async() =>{
    if(Object.keys(user).length<1){
    try{
        const userData = await axios.get(`${process.env.REACT_APP_BACK_END_URL}users/oneuser`);
        if(userData){
          setUser(userData.data)
      }
    }catch(err){
      console.log(err.message)
    }
  }
}
useEffect(()=>{
    getUserData();
},[user])
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
