import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "./MHSlice";
import { useState } from "react";

export default function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users=useSelector((state)=>state.MH.users);
    const [inputId,setInputId]=useState("");
    const [inputNumber,setInputNumber]=useState("");
    return (
        <>
            <h1>문자히어로!</h1>
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setInputId(e.target.inputId.value);
                    const inputPw = e.target.inputPw.value;
                    const inputName = e.target.inputName.value;
                    setInputNumber(e.target.inputNumber.value);
                    if(users.find(u=>u.userId===inputId)){
                        alert("중복된 아이디입니다.");
                        return;
                    };
                    if(users.find(u=>u.contact===inputNumber)){
                        alert("중복된 번호입니다.");
                        return;
                    };
                    dispatch(signUp({inputId,inputPw,inputName,inputNumber}));
                    navigate("/");
                }}>
                    <div>
                        <label>아이디</label>
                        <input type="text" name="inputId" value={inputId} onChange={(e)=>{
                            setInputId(e.target.value);
                        }}></input>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            if(users.find(u=>u.userId===inputId)){
                                alert("중복된 아이디입니다.");
                                return;
                            }
                            alert("사용 가능한 아이디입니다.");
                        }}>중복확인</button>
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input type="text" name="inputPw"></input>
                    </div>
                    <div>
                        <label>이름</label>
                        <input type="text" name="inputName"></input>
                    </div>
                    <div>
                        <label>전화번호</label>
                        <input type="text" name="inputNumber" value={inputNumber} onChange={(e)=>{
                            setInputNumber(e.target.value);
                        }}></input>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            if(users.find(u=>u.contact===inputNumber)){
                                alert("중복된 번호입니다.");
                                return;
                            }
                            alert("사용 가능한 번호입니다.");
                        }}>중복확인</button>
                    </div>
                    <button>회원가입</button>
                </form>
            </div>
            <div>
            <p>Copyright © MESSAGEHERO Corp. All Rights Reserved.</p>
            </div>
        </>
    )
}