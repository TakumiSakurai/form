// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';
// import { motion } from 'framer-motion';

// export default function Register() {
//     const [users, setUsers] = useState([]); 
//     const navigate = useNavigate();

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const newUser ={
//             name: formData.get('name'),
//             email: formData.get('email'),
//             password: formData.get('password'),
//             age: formData.get('age'),
//             gender: formData.get('gender'),
//         }
//         setUsers([...users, newUser]);
//         userSubmit(users);
//     }
//     const userSubmit =(user)=>{
//         console.log(user);
//         fetch('http://localhost:8080/userlist/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(user)
//         })
//     }

//     return (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{
//                 x: 0,
//                 y: 0,
//                 scale: 1,
//                 opacity: 1,
//             }}
//             exit={{}}
//         >
//             <h1>新規登録</h1>
//             <div className="form-container">
//                 <form className="styled-form" onSubmit={onSubmit}>
//                     <label htmlFor="name">名前</label>
//                     <input type="text" id="name" name="name" defaultValue="何某" required />

//                     <label htmlFor="mailaddress">メールアドレス</label>
//                     <input type="email" id="mailaddress" name="mailaddress" defaultValue="abc@cdf.com" required  />

//                     <label htmlFor="password">パスワード</label>
//                     <input type="password" id="password" name="password" defaultValue="aaa" required />

//                     <label htmlFor="age">年齢</label>
//                     <input type="number" id="age" name="age" required  />

//                     <label htmlFor="gender">性別</label>
//                     <select id="gender" name="gender" required >
//                         <option value="">選択してください</option>
//                         <option value="male">男性</option>
//                         <option value="female">女性</option>
//                         <option value="other">その他</option>
//                     </select>

//                     <button type="submit">登録</button>
//                 </form>
//             </div>
//         </motion.div>
//     );
// }
