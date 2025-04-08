
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { customDelete, customUpdate } from "./MHSlice";
import './assets/css/CustomRead.css'; 

export default function CustomRead() {
  const { styleTitle } = useParams();
  const currentUser = useSelector(state => state.MH.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentStyle = currentUser 
    ? currentUser.userStyle.find(s => s.title === styleTitle) 
    : null;

  const [title, setTitle] = useState(currentStyle ? currentStyle.title : "");
  const [body, setBody] = useState(currentStyle ? currentStyle.body : "");

  useEffect(() => {
    if (currentStyle) {
      setTitle(currentStyle.title);
      setBody(currentStyle.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [styleTitle]); // 파라미터가 바뀔때

  return (
    
    <form className="custom-form">
      <h3>내 스타일 만들기</h3>
      <input
        className="custom-input"
        name="title"
        type="text"
        value={title}
        placeholder="Input text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="custom-textarea"
        name="body"
        value={body}
        placeholder="Textarea"
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="custom-button-group">
        <button
          className="custom-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const beforeUpdate = currentUser.userStyle.filter(s=>s.title !== styleTitle);
            if(beforeUpdate.find(s=>s.title === title)){
              alert("서식 이름이 중복되었습니다.");
              return;
            }
            dispatch(customUpdate({ styleTitle, title, body }));
            navigate("/main/customize");
          }}
        >
          수정
        </button>
        
        <button
          className="custom-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(customDelete(styleTitle));
            navigate("/main/customize");
          }}
        >
          삭제
        </button>

        <button
          className="custom-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/main/customize");
          }}>뒤로가기</button>
      </div>
    </form>
  );
}
