import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page3 from '../components/pages/page3';
import Layout from '../layout/layout';
import Page1 from '../components/pages/page1';
import Page2 from '../components/pages/page2';
import Home from '../components/home';


const AppRouters = () => {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/page1' element={<Page1/>}/>
            <Route path='/page2' element={<Page2/>}/>
            <Route path='/page3' element={<Page3/>}/>

          </Route>
        </Routes>
    </Router>
  )
}

export default AppRouters