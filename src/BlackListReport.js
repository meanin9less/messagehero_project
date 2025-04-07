import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addBlackList } from "./MHSlice";
import { useState } from "react";

export default function BlackListReport() {
const navigate = useNavigate();
const dispatch = useDispatch();
const [inputContact, setInputContact] = useState();
return (
<>
<div>
    <form onSubmit={(e) => {
        e.preventDefault();
        if (e.target.input.value === "") {
            alert("번호를 입력해주세요.");
            return;
        }
        if (!(e.target.fishing.checked || e.target.spam.checked)) {
            alert("한 가지 이상 선택해주세요.");
            return;
        }
        const fishing = e.target.fishing.checked ? 1 : 0;
        const spam = e.target.spam.checked ? 1 : 0;
        
        alert("신고되었습니다.");
        dispatch(addBlackList({inputContact, fishing, spam}));
        navigate("/header/blacklist");
    }}>
        <div>
            <label>신고 번호</label>
            <input type="text" name="input" value={inputContact} onChange={(e) => {
                setInputContact(e.target.value);
            }}></input>
        </div>
        <div>
            <div>
                <span>신고 유형 </span>
                <label>보이스 피싱</label>
                <input type="checkbox" name="fishing"></input>
                <label>스팸 및 광고성</label>
                <input type="checkbox" name="spam"></input>
            </div>
            <button type="submit">신고</button>
        </div>
    </form>
</div>
</>
)
}