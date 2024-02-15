import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavFooterOutlet from "./NavFooterOutlet.js"
import Loading from '../components/Loading/Loading.js';

const LazyHome = React.lazy(()=>import('../pages/Home/Home.js'));
const LazyBody = React.lazy(()=>import('../pages/BodyPage/BodyPage.js'));
const LazyMind = React.lazy(()=>import('../pages/MindPage/MindPage.js'));
const LazyNutritionCenter = React.lazy(()=>import('../pages/NutritionCenterPage/NutritionCenterPage.js'));
const LazyLogin = React.lazy(()=>import('../pages/LoginPage/LoginPage.js'));
const LazySignup = React.lazy(()=>import('../pages/SignupPage/SignupPage.js'));

function AppRoutes() {
  return (
    <Routes>
        <Route exact path='/' element={<NavFooterOutlet />}>
            <Route path='/' element={
              <React.Suspense fallback={<Loading />}>
                <LazyHome />
              </React.Suspense>
            }/>
            <Route path='/body' element={
              <React.Suspense fallback={<Loading />}>
                <LazyBody />
              </React.Suspense>
            }/>
            <Route path='/mind' element={
              <React.Suspense fallback={<Loading />}>
                <LazyMind />
              </React.Suspense>
            }/>
            <Route path='/nutrition-center' element={
              <React.Suspense fallback={<Loading />}>
                <LazyNutritionCenter />
              </React.Suspense>
            }/>
        </Route>
        <Route path='/login' element={
              <React.Suspense fallback={<Loading />}>
                <LazyLogin />
              </React.Suspense>
            }/>
            <Route path='/signup' element={
              <React.Suspense fallback={<Loading />}>
                <LazySignup />
              </React.Suspense>
            }/>
    </Routes>
  )
}

export default AppRoutes