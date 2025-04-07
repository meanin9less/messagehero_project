
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "./MHSlice";
import './assets/css/Header.css';
import heroLogo from './assets/img/logo1.png';

export default function Header() {
    const currentUser = useSelector(state=>state.MH.currentUser);
    const dispatch = useDispatch();
    const link = document.createElement('link');
    const navigate=useNavigate();
    
    return (
        <div className="header_wrap">
          <div className="header">
                <div className="logo_section">
                    <img src={heroLogo} alt="히어로 그림" onClick={() => navigate("/")} />
                </div>

                <div className="page_title">&nbsp;&nbsp;문자 히어로!</div>

                <div className="main_menu">
                    <ul>
                        <li><Link to="/Main/phonebook">연락처로</Link></li>
                        <li><Link to="/Main/message">문자전송</Link></li>
                        <li><Link to="/Main/blacklist">유해번호조회</Link></li>
                        <li><Link to="/Main/customize">내 스타일</Link></li>
                        <li className="login_menu">
                        {currentUser ?
                        <><span>{currentUser.name}님</span><button onClick={(e) => {
                            if (!currentUser) {
                                return;
                            } else {
                                dispatch(logout());
                            }
                        }}>로그아웃</button></>
                        : <Link to='/login'>Log-in</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}