import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import "./App.css";
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import ClaimComponent from './components/ClaimComponent';
import Dashboard from './components/Dashboard';
import HospitalRegistration from './components/HospitalRegistration';
import ChatBot from './components/ChatBot';
import PolicyOverView from './components/PolicyOverView';
import DashboardComponents from './components/DashboardComponents';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard/claim-settled' element={<DashboardComponents/>}/>
          <Route path='/claim' element={<ClaimComponent/>}/>
          <Route path='/organization-form' element={<HospitalRegistration/>}/>
          <Route path='/message' element={<ChatBot/>}/>
          <Route path='/policy-overview' element={<PolicyOverView/>}/>
          <Route path='/admin panel' element={<AdminPanel/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App;

//Innovation@1998 ... Git Hub Password
