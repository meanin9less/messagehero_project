import { Link } from "react-router-dom";

export default function Main(){
    return(
        <>
            <div>
                <Link to='/login'>Log-in</Link>
            </div>
            <h1>문자히어로!</h1>
            <Link to='/header/phonebook'>연락처로</Link>
            <Link to='/header/message'>문자전송</Link>
            <Link to='/header/blacklist'>유해번호조회</Link>
            <Link to='/header/mystyle'>내 스타일</Link>
        </>
    )
}