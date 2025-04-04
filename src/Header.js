import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "./MHSlice";

export default function Header() {
    const login = useSelector(state=>state.MH.users.find(u=>u.login));
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h1>문자히어로!</h1>
                <div>
                    <Link to='/header/phonebook'>연락처로</Link>&nbsp;&nbsp;
                    <Link to='/header/message'>문자전송</Link>&nbsp;&nbsp;
                    <Link to='/header/blacklist'>유해번호조회</Link>&nbsp;&nbsp;
                    <Link to='/header/mystyle'>내 스타일</Link>&nbsp;&nbsp;
                </div>
                <div>
                    {login ? <><span>{login.name}님</span><button onClick={(e)=>{
                        dispatch(logout(login.userId));
                    }}>로그아웃</button></> : <Link to='/login'>Log-in</Link>}
                </div>
            </div>
            <Outlet userId={login.userId}></Outlet>
        </>
    )
}