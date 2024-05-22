import react from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    let loginUser ={};


    const toLogin = (e) => {
        e.preventDefault();
        loginUser = {
            userEmail: e.target.userEmail.value,
            userPassword: e.target.userPassword.value,
        };
        axios.post('http://localhost:8080/userlist/login', loginUser.userEmail)
            .then(
                navigate('/components/AdminSuccess')
            )
            .catch((error) => {
                console.error('Error logging in:', error);
            });

        navigate('/components/LoginPage');
    }
    return (
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
        >
            <h1>ログインページ</h1>
            <p>ログインIDとパスワードを入力してください</p>
            <form onSubmit={toLogin}>
                <input type="text" name="userEmail" placeholder="mailaddress" value="abc@cdf.com" required/><br />
                <input type="password" name="userPassword" placeholder="Password" value="abcdef1" required/><br />
                <button type='submit'>ログイン</button>
            </form>
        </motion.div>
    )
}