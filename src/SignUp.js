import "./assets/css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "./MHSlice";
import { useState } from "react";
import heroLogo from './assets/img/logo1.png';    

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.MH.users);
    const [inputId, setInputId] = useState("");
    const [inputNumber, setInputNumber] = useState("");

    return (
        <div className="signupWrap">
            <h1 className="logoH1">문자히어로!</h1>
            <div className="logo_section">
                <img src={heroLogo} alt="히어로 그림" onClick={() => navigate("/")} /> 
            </div>
            <div className="signupDiv">
                <form className="signupForm" onSubmit={(e) => {
                    e.preventDefault();
                    setInputId(e.target.inputId.value);
                    const inputPw = e.target.inputPw.value;
                    const inputName = e.target.inputName.value;
                    setInputNumber(e.target.inputNumber.value);
                    if(inputId.length<4){
                        alert("아이디는 네자 이상 입력하세요.")
                        return;
                    }
                    if(inputPw.length<4){
                        alert("비밀번호는 네자 이상 입력하세요.")
                        return;
                    }
                    if(inputName===""){
                        alert("이름은 공란일 수 없습니다.")
                        return;
                    }
                    if(inputNumber===""){
                        alert("전화번호는 공란일 수 없습니다.")
                        return;
                    }

                    if (users.find(u => u.userId === inputId)) {
                        alert("중복된 아이디입니다.");
                        return;
                    }
                    if (users.find(u => u.contact === inputNumber)) {
                        alert("중복된 번호입니다.");
                        return;
                    }
                    dispatch(signUp({ inputId, inputPw, inputName, inputNumber }));
                    navigate("/login");
                }}>
                    <div className="formDiv">
                        <div>
                            <label className="formLabel" style={{ display: "block", width: "100%" }}>아이디</label>
                        </div>
                        <input type="text" name="inputId" value={inputId} onChange={(e) => setInputId(e.target.value)} className="formInputId"/>
                        <button className="checkButton" onClick={(e) => {
                            e.preventDefault();
                            if (users.find(u => u.userId === inputId)) {
                                alert("중복된 아이디입니다.");
                                return;
                            }
                            alert("사용 가능한 아이디입니다.");
                        }}>중복확인</button>
                    </div>
                    <div className="formDiv">
                        <label className="formLabel">비밀번호</label>
                        <input type="password" name="inputPw" className="formInput"/>
                    </div>
                    <div className="formDiv">
                        <label className="formLabel">이름</label>
                        <input type="text" name="inputName" className="formInput" />
                    </div>
                    <div className="formDiv">
                        <div>
                            <label className="formLabel" style={{ display: "block", width: "100%" }}>전화번호</label>
                        </div>
                        <input type="text" name="inputNumber" value={inputNumber}
                            onChange={(e) => setInputNumber(e.target.value.replace(/[^0-9]/g, ""))}
                            className="formInputNumber"
                        />
                        <button className="checkButton" onClick={(e) => {
                            e.preventDefault();
                            if (users.find(u => u.contact === inputNumber)) {
                                alert("중복된 번호입니다.");
                                return;
                            }
                            alert("사용 가능한 번호입니다.");
                        }}>중복확인</button>
                    </div>
                    <button className="submitButton">회원가입</button>
                </form>
            </div>
            <div className="footerText">
                <p>Copyright © MESSAGEHERO Corp. All Rights Reserved.</p>
            </div>
        </div>
    );
}