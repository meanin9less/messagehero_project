import { useState } from "react";
import { useSelector } from "react-redux";

export default function Message() {
  const currentUser = useSelector(state => state.MH.currentUser);
  const currentStyle = currentUser ? currentUser.userStyle : [];
  const contactList = currentUser ? currentUser.contacts : [];
  
  const [inputMessage, setInputMessage] = useState("");
  const [recipientList, setRecipientList] = useState([]);

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
    <>
      {currentUser ? (
        <div>
          <div>
            <h3>문자메세지</h3>
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="메시지를 입력하세요"
            />
          </div>
          <div>
            <h3>서식</h3>
            <div>
              {currentStyle.length === 0 ? (
                <p>서식이 없습니다.</p>
              ) : (
                currentStyle.map(s => (
                  <div
                    key={s.title}
                    onClick={() => setInputMessage(s.body)}
                  >
                    <p>{s.title}</p>
                    <p>{s.body}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div>
            <h3>연락처</h3>
            <ul>
              {contactList.map(c => (
                <li key={c.contact}>
                  {c.name}
                  <button
                    onClick={() => {
                      if (!recipientList.some(r => r.contact === c.contact)) {
                        setRecipientList([...recipientList, c]);
                      }
                    }}
                  >
                    추가
                  </button>
                </li>
              ))}
            </ul>
            <h3>수신자 목록</h3>
            <ul>
              {recipientList.length > 0 ? (
                recipientList.map(r => (
                  <li key={r.contact}>
                    {r.name}
                    <button
                      onClick={() => {
                        setRecipientList(recipientList.filter(rec => rec.contact !== r.contact));
                      }}
                    >
                      제외
                    </button>
                  </li>
                ))
              ) : (
                <p>수신자 없음</p>
              )}
            </ul>
            <button onClick={handleSend}>전송</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3>문자메세지</h3>
            <textarea disabled placeholder="로그인 후 이용하세요" />
          </div>
          <div>
            <h3>서식</h3>
            <div>
              <p>로그인 후 이용하세요</p>
            </div>
          </div>
          <div>
            <h3>연락처</h3>
            <ul>
              <p>로그인 후 이용하세요.</p>
            </ul>
            <h3>수신자 목록</h3>
            <ul>
              <p>로그인 후 이용하세요.</p>
            </ul>
            <button onClick={() => alert("로그인 후 이용하세요.")}>전송</button>
          </div>
        </div>
      )}
    </>
  );
}