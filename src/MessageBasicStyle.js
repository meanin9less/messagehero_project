import { useNavigate, useOutletContext } from "react-router-dom";
import "./assets/css/Message1.css";
export default function MessageBasicStyle() {
const { styles, setInputMessage, currentUser } = useOutletContext();
const navigate = useNavigate();
return (
<div className="message_box">
<div className="message-style-header">
<h3 className="message-style-title">기본 서식</h3>
<div className="message-style-buttons">
    <button onClick={() => navigate("/main/message")} className="message-style-button">기본 스타일</button>
    <button onClick={() => {
        if (!currentUser) {
            alert("로그인 후 이용하세요.");
            return;
        }
        navigate("/main/message/MessageMyStyle")
    }
    } className="message-style-button">내 스타일</button>
</div>
</div>
<div className="message_box2">
{currentUser ?
    styles.length === 0 ? <p className="message-empty">서식이 없습니다.</p> :
        styles.map((s) => (
            <div className="message_item" key={s.title} onClick={() => setInputMessage(s.body)}>
                <p className="messageStyleTitle">{s.title}</p>
                <p className="messageStyleTitle">{s.body}</p>
            </div>
        )) : <p className="message-login-prompt">로그인 후 이용하세요.</p>}
</div>
</div>
);
}