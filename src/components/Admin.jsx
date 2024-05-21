import react from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

export default function Admin() {
    const [adminUser, setAdminUser] = useState([]);
    const navigate = useNavigate();

    const toAdmin = (e) => {
        e.preventDefault();
        const newUser = {
            id: e.target.id.value,
            password: e.target.password.value,
        };
        setAdminUser([...adminUser, newUser]);
        console.log(newUser);
        navigate('/components/AdminSuccess');
    }
    return (
        <div>
            <h1>Admin Page</h1>
            <p>管理者用IDとパスワードを入力してください</p>
            <form onSubmit={toAdmin}>
                <input type="text" name="id" placeholder="ID" value="user" required/><br />
                <input type="password" name="password" placeholder="Password" value="password" required/><br />
                <button type='submit'>ログイン</button>
            </form>
        </div>
    )
}