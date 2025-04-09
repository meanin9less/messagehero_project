import { useState } from "react";
import { useSelector } from "react-redux";
import "./assets/css/Message.css";
import MessageWrite from "./MessageWrite";
import { Outlet } from "react-router-dom";
import MessagePhoneBook from "./MessagePhoneBook";

export default function Message() {
const currentUser = useSelector((state) => state.MH.currentUser);
const basicStyle = useSelector((state) => state.MH.basicStyle);
const contactList = currentUser ? currentUser.contacts : [];
const [inputMessage, setInputMessage] = useState("");
const [recipientList, setRecipientList] = useState([]);

function getByteLength(str) {
return new TextEncoder().encode(str).length;
}

const handleSend = () => {
if (!currentUser) {
alert("로그인 후 이용하세요.");
return;
}
if (!inputMessage.trim() && recipientList.length === 0) {
alert("메시지와 수신자를 입력하세요.");
return;
}
if (!inputMessage.trim()) {
alert("메시지를 입력하세요.");
return;
}
if (recipientList.length === 0) {
alert("수신자를 추가하세요.");
return;
}
alert("메시지가 전송되었습니다!");
setInputMessage("");
setRecipientList([]);
};

return (
<div className="message_container">
<div className="message_left">
    <MessageWrite props={{inputMessage, setInputMessage, getByteLength, currentUser}}/>
    <Outlet context={{ styles: basicStyle, setInputMessage, currentUser }} />
</div>
<div className="message_right">
    <MessagePhoneBook props={{contactList, recipientList, setRecipientList, handleSend, currentUser}}/>
</div>
</div>
);
}