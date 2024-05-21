import react from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { motion } from 'framer-motion';

export default function Login() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const toLogin = (e) => {
        e.preventDefault();
        const newUser = {
            id: e.target.id.value,
            password: e.target.password.value,
        };
        setUser([...user, newUser]);
        console.log(newUser);
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
            exit={{}}
        >
            <h1>ログインページ</h1>
            <p>ログインIDとパスワードを入力してください</p>
            <form onSubmit={toLogin}>
                <input type="text" name="id" placeholder="ID" value="何某" required/><br />
                <input type="password" name="password" placeholder="Password" value="password" required/><br />
                <button type='submit'>ログイン</button>
            </form>
        </motion.div>
    )
}