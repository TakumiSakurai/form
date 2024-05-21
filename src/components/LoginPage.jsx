import react from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Todo from './Todo';
import Edit from './Edit';
import './LoginPage.css';
import { motion } from 'framer-motion';

export default function LoginPage() {
    return(
        <motion.div 
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
        <h1>MyPage</h1>
        <a href='/components/Edit'>個人情報の変更はこちらから</a>
        <section className='todo'>
            <Todo />
        </section>
        <section className='edit'>
            
        </section>
        </motion.div>
    )
}