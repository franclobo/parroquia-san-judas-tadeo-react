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
        <Typography.Title level={5} style={{ color: '#fff', textAlign: 'center' }}>
          Parroquia San Judas Tadeo -La Roldós- &copy; 2022 - Todos los derechos reservados - Desarrollado por <a href='https://www.linkedin.com/in/francisco-borja-lobato/' target='_blank' rel='noreferrer'>Francisco Javier Borja Lobato</a>
        </Typography.Title>
        <Space>
          <Link to='/'>Caritas</Link>
          <Link to='/'>Juan XXIII</Link>
          <Link to='/'>Catequesis</Link>
          <Link to='/'>Noticias</Link>
          <Link to='/'>Contacto</Link>
        </Space>
      </div>
    </div>
  )
}

export default App
