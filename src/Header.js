import { Link, Outlet } from "react-router-dom";

export default function Header() {
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
                    
                </div>
            </div>
            <Outlet></Outlet>
        </>
    )
}