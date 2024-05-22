import React, { useEffect, useState } from 'react';
import './AdminSuccess.css';
import axios from 'axios';

export default function AdminSuccess() {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch('http://localhost:8080/userlist')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching user data:', error));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteButton = (userId) => {
        console.log(userId);
        axios.delete(`http://localhost:8080/userlist/delete/${userId}`)
            .then(() => {
                fetchUsers(); // ユーザー削除後にユーザー一覧を再度フェッチ
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    const Logout = () => {
        window.location.href = '/';
    };

    return (
        <>
            <h1>管理者画面</h1>
            <h2>ユーザー一覧</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>名前</th>
                        <th>メールアドレス</th>
                        <th>パスワード</th>
                        <th>年齢</th>
                        <th>性別</th>
                        <th>編集</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>{user.userPassword}</td>
                            <td>{user.userAge}</td>
                            <td>{user.userGender}</td>
                            <td><button>編集</button></td>
                            <td><button onClick={() => deleteButton(user.userId)}>削除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='logout' onClick={Logout}>ログアウト</button>
        </>
    );
}
