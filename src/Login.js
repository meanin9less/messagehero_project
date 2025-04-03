import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <h1>문자히어로!</h1>
            <div>
                <form>
                    <div>
                        <label>아이디</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type="password"></input>
                    </div>
                    <button>로그인</button>
                </form>
                <Link to="sign-up">회원가입</Link>
            </div>
            <div>
            <p>Copyright © MESSAGEHERO Corp. All Rights Reserved.</p>
            </div>
        </>
    )
}