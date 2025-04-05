import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "./MHSlice";
import './Header.css';

export default function Header() {
    const currentUser = useSelector(state=>state.MH.currentUser);
    const dispatch = useDispatch();
    const link = document.createElement('link');
    
    return (
        <div className="header_wrap">
          <div className="header">
                <div className="logo_section">
                    <img src="/logo1.png" alt="히어로 그림" />
                </div>

                <div className="page_title">&nbsp;&nbsp;문자 히어로!</div>

                <div className="main_menu">
                    <ul>
                        <li><Link to="/header/phonebook">연락처로</Link></li>
                        <li><Link to="/header/message">문자전송</Link></li>
                        <li><Link to="/header/blacklist">유해번호조회</Link></li>
                        <li><Link to="/header/customize">내 스타일</Link></li>
                        <li className="login_menu">
                            {currentUser ? (
                                <>
                                    <span>{currentUser.name}님</span>&nbsp;
                                    <button
                                        onClick={() => {
                                            if (currentUser) {
                                                dispatch(logout());
                                            }
                                        }}
                                    >
                                        로그아웃
                                    </button>
                                </>
                            ) : (
                                <Link to="/login">로그인/회원가입</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}