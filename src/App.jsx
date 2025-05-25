import React from 'react'
import SignUp from './component/SignUp'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Generate from './component/Generate'
import Wiki from './component/Wiki'
import Interview from './component/Interview'
import Feedback from './component/Feedback'
import Footer from './component/Footer'
import Signin from './component/Signin'

const App = () => {

  const location = useLocation();
  const hideHF = ['/signin','/signup'];
  const shuldhide = hideHF.includes(location.pathname);


  return (
    <div className="min-h-screen flex flex-col">
    {!shuldhide && <Header />}

    <div className="flex-1">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/generate' element={<Generate />}></Route>
      <Route path='/wiki' element={<Wiki />}></Route>
      <Route path='/interview' element={<Interview />}></Route>
      <Route path='/feed' element={<Feedback />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
    </Routes>
    </div>
    {!shuldhide && <Footer />}
    </div>
  )
}

export default App