import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Register() { 
    const navigate = useNavigate();
    let newUser = {};
    const onSubmit = (e) => {
        e.preventDefault();
        newUser ={
            userName: e.target.userName.value,
            userEmail: e.target.userEmail.value,
            userPassword: e.target.userPassword.value,
            userAge: e.target.userAge.value,
            userGender: e.target.userGender.value,
        }
            axios.post('http://localhost:8080/userlist/add', newUser)
        .then(
            navigate('/components/RegisterSuccess', { state: newUser })
        )
        .catch((error) => {
            console.error('Error registering user:', error);
        });
    }

    



    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
            }}
            exit={{}}
        >
            <h1>新規登録</h1>
            <div className="form-container">
                <form className="styled-form" onSubmit={onSubmit}>
                    <label htmlFor="name">名前</label>
                    <input type="text" id="name" name="userName" defaultValue="何某" required />

                    <label htmlFor="mailaddress">メールアドレス</label>
                    <input type="email" id="mailaddress" name="userEmail" defaultValue="abc@cdf.com" required  />

                    <label htmlFor="password">パスワード</label>
                    <input type="password" id="password" name="userPassword" defaultValue="aaa" required />

                    <label htmlFor="age">年齢</label>
                    <input type="number" id="age" name="userAge" required  />

                    <label htmlFor="gender">性別</label>
                    <select id="gender" name="userGender" required >
                        <option value="">選択してください</option>
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                        <option value="other">その他</option>
                    </select>

                    <button type="submit">登録</button>
                </form>
            </div>
        </motion.div>
    );
}
