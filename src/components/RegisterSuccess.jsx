import react from 'react';
import {useLocation ,Navigate, useNavigate} from 'react-router-dom';
import './RegisterSuccess.css';
import { motion } from 'framer-motion';

export default function RegisterSuccess(state) {
    const location = useLocation();
    const { user } = location.state || {};
        const navigate = useNavigate();

    const top = () => {
        navigate('/');
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
            exit={{}}
        >
        <div className="box">
            <h2>登録完了</h2>
            <p>以下の内容で登録しました</p>
            <div className="title">
                <div className='text'>名前: {user.name}</div>
                <div className='text'>メールアドレス: {user.email}</div>
                <div className='text'>パスワード: {user.password}</div>
                <div className='text'>年齢: {user.age}</div>
                <div className='text'>性別: {user.gender}</div>
            </div>
        </div>
            <button className='return' onClick={top}>トップに戻る</button>
        </motion.div>


    );
}
