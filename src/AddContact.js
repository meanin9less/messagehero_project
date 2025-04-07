import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./MHSlice";

export default function AddContact() {
    const currentUser = useSelector(state => state.MH.currentUser);
    const dispatch = useDispatch();
    return (
        <div>
            <h4>연락처 추가</h4>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!currentUser) {
                    alert("로그인 후 이용해주세요.");
                    return;
                }
                const inputName = e.target.name.value;
                const inputContact = e.target.contact.value;
                const inputEtc = e.target.etc.value;
                if (!(e.target.name.value)) {
                    alert("이름을 입력해주세요.");
                    return;
                };
                if (!(e.target.contact.value)) {
                    alert("번호를 입력해주세요.");
                    return;
                };
                const contact = { name: inputName, contact: inputContact, etc: inputEtc };
                dispatch(addContact(contact));
            }}>
                <div>
                    <label>이름</label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label>전화번호</label>
                    <input type="text" name="contact"></input>
                </div>
                <div>
                    <label>기타</label>
                    <input type="text" name="etc"></input>
                </div>
                <button type="submit">추가</button>
            </form>
        </div>
    )
}

