import "./assets/css/Message.css";

export default function MessagePhoneBook({ props }) {
const { contactList, recipientList, setRecipientList, handleSend, currentUser } = props;
return (
<>
<div className="message_phonebook_box">
    <h3 className="contacts-title">연락처</h3>
    <ul className="message-contacts-list">
        {currentUser ?
            contactList.length === 0 ? <p className="message-empty">연락처가 비어있습니다.</p> :
                contactList.map((c) => (
                    <li className="message-contact-item" key={c.contact}>{c.name}
                        <button className="message_add_bt" onClick={() => {
                            if (!recipientList.some((r) => r.contact === c.contact)) {
                                setRecipientList([...recipientList, c].sort((a, b) =>
                                    a.name.localeCompare(b.name)));
                            }
                        }}>추가</button>
                    </li>
                )) : <p className="message-login-prompt">로그인 후 이용하세요.</p>}
    </ul>
</div>
<div className="message_phonebook_box">
    <h3 className="recipients-title">수신자 목록</h3>
    <ul className="message-recipients-list">
        {currentUser ?
            recipientList.length > 0 ?
                recipientList.map((r) => (
                    <li className="message-contact-item" key={r.contact}>{r.name}
                        <button className="message_remove_bt" onClick={() =>
                            setRecipientList(
                                recipientList.filter((rec) => rec.contact !== r.contact)
                            )}>제외</button>
                    </li>
                )) : <p className="message-empty">수신자 없음</p>
            : <p className="message-login-prompt">로그인 후 이용하세요.</p>}
    </ul>
    <div className="message_send_bt_div">
    <button className="message_send_bt" onClick={currentUser ? handleSend : () => alert("로그인 후 이용하세요.")}>전송</button>
    </div>
</div>
</>
);
}