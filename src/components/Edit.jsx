import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Edit.css";
import { motion } from "framer-motion";
export default function Edit() {
    const navigate = useNavigate();
    const toChange = (e) => {
        e.preventDefault(); 

        navigate('/components/LoginPage');
    }
    // const deleteButton = () => {
    //     navigate('/');
    // }
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
        exit={{}}
        >
        <h1>編集画面</h1>
        <table>
        <div className="form-container">
            <form className="styled-form" onSubmit={toChange}>
                <label htmlFor="name">名前</label>
                <input type="text" id="name" name="name" value="何某" required />

                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" value="abc@cdf.com" required />

                <label htmlFor="password">パスワード</label>
                <input type="password" id="password" name="password" value="aaa" required />

                <label htmlFor="age">年齢</label>
                <input type="number" id="age" name="age"  required />

                <label htmlFor="gender">性別</label>
                <select id="gender" name="gender" required>
                    <option value="">選択してください</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                    <option value="other">その他</option>
                </select>

                <button type="submit">変更</button>

            </form>

        </div>
        {/* <button className="delete-button" type="submit" onClick={deleteButton}>データの削除</button> */}
        </table>
        </motion.div>
    );
    }