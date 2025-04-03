import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./MHSlice";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <h1>문자히어로!</h1>
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    const inputId = e.target.inputid.value;
                    const inputPw = e.target.inputpw.value;
                    dispatch(login( {inputId, inputPw}));

                    navigate("/");

                }}>
                    <div>
                        <label>아이디</label>
                        <input type="text" name="inputid"></input>
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type="password" name="inputpw"></input>
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