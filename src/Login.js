import "./assets/css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./MHSlice";
import heroLogo from './assets/img/logo1.png';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state=>state.MH.users);
    return (
        <div className="loginWrap">
            <h1 className="logoH1">문자히어로!</h1>
            <div className="logo_section">
                <img src={heroLogo} alt="히어로 그림" onClick={() => navigate("/")} /> 
            </div>
            <div className="loginDiv">
                <form className="loginForm" onSubmit={(e) => {
                    e.preventDefault();
                    const inputId = e.target.inputid.value;
                    const inputPw = e.target.inputpw.value;
                    if(!(users.find(u=>u.userId === inputId))){
                        alert("아이디가 잘못되었습니다.");
                        return;
                    }
                    if(!(users.find(u=>u.password === inputPw))){
                        alert("비밀번호가 잘못되었습니다.");
                        return;
                    }
                    dispatch(login({ inputId }));
                    alert("로그인 하였습니다.");
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