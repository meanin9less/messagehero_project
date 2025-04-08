
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./MHSlice";
import "./assets/css/Intro.css";

// 아이콘 이미지 import (assets 폴더에 파일 넣기)
import phonebookIcon from './assets/img/phonebook.png';
import messageIcon from './assets/img/message.png';
import shieldIcon from './assets/img/shield.png';
import templateIcon from './assets/img/template.png';
import heroLogo from './assets/img/logo1.png';
import heroLogo2 from './assets/img/logo2.png';

export default function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.MH.currentUser);

    return (
        <div className="main_container">
            <div className="header">
                <img
                    src={heroLogo}
                    alt="문자히어로 로고"
                    className="logo"
                    // onClick={() => navigate("/")}
                />
                <div className="auth_section">
                {currentUser ? <><span>{currentUser.name}님</span><button onClick={(e) => {
                    dispatch(logout(currentUser.userId));
                }}>로그아웃</button></> : <button className="login_bt" onClick={(e)=>{
                    navigate("/login");
                }}>로그인</button>
                // <Link to='/login'>Log-in</Link>
                }
                </div>
            </div>

            <h1 className="visually_hidden">문자히어로</h1>
            <img
                src={heroLogo2} alt=""
                className="logo_main"
            />

            <div className="icon_section">
                <div className="icon_box" onClick={() => navigate('/main/phonebook')}>
                    <img src={phonebookIcon} alt="전화번호부" />
                    <Link to="/main/phonebook">연락처 보기</Link>
                </div>
                <div className="icon_box" onClick={() => navigate('/main/message')}>
                    <img src={messageIcon} alt="문자전송" />
                    <Link to="/main/message" className="logo_title">메시지 전송</Link>
                </div>
                <div className="icon_box" onClick={() => navigate('/main/blacklist')}>
                    <img src={shieldIcon} alt="유해번호 조회" />
                    <Link to="/main/blacklist">유해번호 조회</Link>
                </div>
                <div className="icon_box" onClick={() => navigate('/main/customize')}>
                    <img src={templateIcon} alt="내 스타일" />
                    <Link to="/main/customize">내 스타일</Link>
                </div>
            </div>
        </div>
    );
}


