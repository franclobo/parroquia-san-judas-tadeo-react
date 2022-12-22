import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Home, Caritas, JuanXXIII, Catequesis, Noticias, Contacto } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/caritas' element={<Caritas />} />
              <Route exact path='/juanxxiii' element={<JuanXXIII />} />
              <Route exact path='/catequesis' element={<Catequesis />} />
              <Route exact path='/noticias' element={<Noticias />} />
              <Route exact path='/contacto' element={<Contacto />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>
      </div>
    </div>
  )
}

export default App
