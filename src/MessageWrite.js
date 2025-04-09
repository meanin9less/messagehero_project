import "./assets/css/Message.css";
export default function MessageWrite({props}) {
const {inputMessage, setInputMessage, getByteLength, currentUser} = props;
return (
    <div className="message_box">
        <h3 className="message-title">문자메세지</h3>
        <textarea
            className="message_textarea"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={currentUser ? "메시지를 입력하세요" : "로그인 후 이용하세요"}
            disabled={!currentUser}
        />
        <p className="message-byte-info">
            {inputMessage.length > 45
                ? `${getByteLength(inputMessage)}Byte LMS`
                : `${getByteLength(inputMessage)}Byte SMS`}
        </p>

    </div>
);
}