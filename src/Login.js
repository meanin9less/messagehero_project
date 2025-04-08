import "./assets/css/login.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./MHSlice";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="loginWrap">
            <h1 className="logoH1">문자히어로!</h1>
            <div className="loginDiv">
                <form className="loginForm" onSubmit={(e) => {
                    e.preventDefault();
                    const inputId = e.target.inputid.value;
                    const inputPw = e.target.inputpw.value;
                    dispatch(login({ inputId, inputPw }));
                    navigate("/");
                }}>
                    <div className="formDiv">
                        <label className="formLabel">아이디</label>
                        <input type="text" name="inputid" className="formInput" />
                    </div>
                    <div className="formDiv">
                        <label className="formLabel">비밀번호</label>
                        <input type="password" name="inputpw" className="formInput" />
                    </div>
                    <button className="submitButton">로그인</button>
                </form>
                <Link to="sign-up" className="signUpLink">회원가입</Link>
            </div>
            <div className="footerText">
                <p>Copyright © MESSAGEHERO Corp. All Rights Reserved.</p>
            </div>
        </div>
    );
}