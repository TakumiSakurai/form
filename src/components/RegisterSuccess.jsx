import react from 'react';
import {useLocation ,Navigate, useNavigate} from 'react-router-dom';
import './RegisterSuccess.css';
import { motion } from 'framer-motion';

export default function RegisterSuccess() {
    const location = useLocation();
    const { state } = location;
    const{userName, userEmail, userPassword, userAge, userGender} = state;
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
                <div className='text'>名前: {userName}</div>
                <div className='text'>メールアドレス: {userEmail}</div>
                <div className='text'>パスワード: {userPassword}</div>
                <div className='text'>年齢: {userAge}</div>
                <div className='text'>性別: {userGender}</div>
            </div>
        </div>
            <button className='return' onClick={top}>トップに戻る</button>
        </motion.div>


    );
}
