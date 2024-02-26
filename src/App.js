import { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes.js';
import axios from 'axios';
import { userStore } from './store.js';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

axios.defaults.withCredentials = true


function App() {

  const queryClient = new QueryClient()

  const {user, setUser} = userStore();
  const [loading, setLoading] = useState(true);

  const  getUserData = async() =>{
    if(Object.keys(user).length<1){
    try{
        const userData = await axios.get(`${process.env.REACT_APP_BACK_END_URL}users/oneuser`);
        if(userData){
          setUser(userData.data)
          setLoading(false)
      }
    }catch(err){
      console.log(err.message)
      setLoading(false)
    }
  }
}
useEffect(()=>{
    getUserData();
},[user])
  return (
    <QueryClientProvider client={queryClient}>
      {!loading && 
    <div className="App">
      <AppRoutes />
    </div>}
    </QueryClientProvider>
  );
}

export default App;
