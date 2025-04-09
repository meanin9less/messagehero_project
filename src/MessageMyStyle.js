import { useNavigate, useOutletContext } from "react-router-dom";
import "./assets/css/Message.css";
export default function MessageMyStyle() {
const { setInputMessage, currentUser } = useOutletContext();
const currentStyle = currentUser ? currentUser.userStyle : [];
const navigate = useNavigate();
return (
    <div className="message_box">
            <div className="message-style-header">
                <h3 className="message-style-title">나만의 서식</h3>
                <div className="message-style-buttons">
                <button onClick={() => navigate("/main/message")} className="message-style-button">기본 스타일</button>
                <button onClick={() => navigate("/main/message/MessageMyStyle")} className="message-style-button">내 스타일</button>
                </div>
            </div>
        <div className="message_box2">
            {currentUser ?
                currentStyle.length === 0 ?
                    <p className="message-empty">서식이 없습니다.</p> :
                    currentStyle.map((s) => (
                        <div className="message_item" key={s.title} onClick={() => setInputMessage(s.body)}>
                            <p className="messageStyleTitle">{s.title}</p>
                            <p className="messageStyleTitle">{s.body}</p>
                        </div>
                    ))
                : <p className="message-login-prompt">로그인 후 이용하세요.</p>}
        </div>
    </div>
);
}