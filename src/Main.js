import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./MHSlice";
import './Main.css';

// 아이콘 이미지 import (assets 폴더에 파일 넣기)
import phonebookIcon from './assets/phonebook.png';
import messageIcon from './assets/message.png';
import shieldIcon from './assets/shield.png';
import templateIcon from './assets/template.png';
import heroLogo from './assets/logo1.png';

export default function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector(state => state.MH.users.find(u => u.login));

    return (
        <div className="main-container">
            <div className="header">
                <img
                    src={heroLogo}
                    alt="문자히어로 로고"
                    className="logo"
                    onClick={() => navigate("/")}
                />
                <div className="auth-section">
                    {login ? (
                        <>
                            <span>{login.name}님</span>
                            <button onClick={() => dispatch(logout(login.userId))}>로그아웃</button>
                        </>
                    ) : (
                        <Link to="/login" className="login-link">Log-in</Link>
                    )}
                </div>
            </div>

            <h1 className="visually-hidden">문자히어로</h1>
            <img
                    src="/logo2.png"
                    className="logo_main"
                />

            <div className="icon-section">
                <div className="icon-box" onClick={() => navigate('/header/phonebook')}>
                    <img src={phonebookIcon} alt="전화번호부" />
                    <Link to="/header/phonebook">연락처 보기</Link>
                </div>
                <div className="icon-box" onClick={() => navigate('/header/message')}>
                    <img src={messageIcon} alt="문자전송" />
                    <Link to="/header/message" className="logo_title">메시지 전송</Link>
                </div>
                <div className="icon-box" onClick={() => navigate('/header/blacklist')}>
                    <img src={shieldIcon} alt="유해번호 조회" />
                    <Link to="/header/blacklist">유해번호 조회</Link>
                </div>
                <div className="icon-box" onClick={() => navigate('/header/customize')}>
                    <img src={templateIcon} alt="내 스타일" />
                    <Link to="/header/customize">내 스타일</Link>
                </div>
            </div>
        </div>
    );
}
