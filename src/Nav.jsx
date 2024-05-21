import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // 正しいパスを指定してください

export default function Nav() {
  return (
    <>
      <h1>FormApp</h1>
      <div className="section">
        <p>ユーザーの方はこちら</p>
        <nav className='nav'>
          <Link to="/components/Register" className='nav-link'>新規登録</Link>
          <Link to="/components/login" className='nav-link'>ログイン</Link>
        </nav>
      </div>
      <div className="section">
        <p>管理者の方はこちら</p>
        <nav className='nav'>
          <Link to='/components/Admin' className='admin-link'>管理者画面へ</Link>
        </nav>
      </div>
    </>
  );
}
