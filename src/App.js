import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes ,useLocation} from 'react-router-dom';
import Login from './components/Login';
import Nav from './Nav';
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import Admin from './components/Admin';
import AdminSuccess from './components/AdminSuccess';
import LoginPage from './components/LoginPage';
import {AnimatePresence} from 'framer-motion';
import { motion } from 'framer-motion';
import Edit from './components/Edit';

function App() {
    return (
        <Router>
            <Main />
        </Router>
    );
}

function Main() {
  const location = useLocation();

  return (
    <motion.div className='app-container'
             initial={{opacity:0, scale:0.5}}
           animate={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                }}
            transition={{
                delay:0.5
            }}
            exit={{}}
    >
      {location.pathname !== '/components/Register' 
      && location.pathname !== '/components/login'
      && location.pathname !== '/components/RegisterSuccess' 
      && location.pathname !== '/components/Admin' 
      && location.pathname !== '/components/AdminSuccess'
      && location.pathname !== '/components/LoginPage'
      && location.pathname !== '/components/Edit' 
      
      &&(
        <Nav />
      )}
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/components/Register" element={<Register/>} />
        <Route path="/components/login" element={<Login />} />
        <Route path="/components/RegisterSuccess" element={<RegisterSuccess />} />
        <Route path='/components/Admin'element={<Admin />} />
        <Route path='/components/AdminSuccess'element={<AdminSuccess />} />
        <Route path='/components/Login'  element={<Login/>} />
        <Route path='/components/LoginPage' element={<LoginPage />} />
        <Route path='/components/Edit' element={<Edit />} />
      </Routes>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
