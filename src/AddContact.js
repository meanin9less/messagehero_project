import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./MHSlice";
import { useState } from "react";

export default function AddContact() {
    const currentUser = useSelector(state => state.MH.currentUser);
    const dispatch = useDispatch();
    const [inputContact, setInputContact] = useState("");

    return (
        <div className="add-contact">
            <h4>연락처 추가</h4>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!currentUser) {
                    alert("로그인 후 이용해주세요.");
                    return;
                }
                const inputName = e.target.name.value;
                const inputEtc = e.target.etc.value;
                if (!(e.target.name.value)) {
                    alert("이름을 입력해주세요.");
                    return;
                };
                if (!(inputContact)) {
                    alert("번호를 입력해주세요.");
                    return;
                };
                const contact = { name: inputName, contact: inputContact, etc: inputEtc };
                dispatch(addContact(contact));
            }}>
                <div className="input-group">
                    <label for="name">이름</label>
                    <input type="text" name="name" id="name" placeholder={currentUser ? "이름을 입력하세요." : "로그인 후 이용하세요."} required />
                </div>
                <div className="input-group">
                    <label for="pw">전화번호</label>
                    <input 
                        type="text" 
                        name="contact" 
                        id="pw"
                        placeholder={currentUser ? "번호를 입력하세요." : "로그인 후 이용하세요."}
                        value={inputContact} 
                        onChange={(e) => setInputContact(e.target.value.replace(/[^0-9]/g, ""))} 
                        required
                    />
                </div>
                <div className="input-group">
                    <label for="etc">정보</label>
                    <input type="text" name="etc" id="etc" placeholder={currentUser ? "추가 정보를 입력하세요." : "로그인 후 이용하세요."} />
                </div>
                <button class="button" type="submit">추가</button>
            </form>
        </div>
    );
}





