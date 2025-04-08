
import { useDispatch } from "react-redux";
import { customAdd } from "./MHSlice";
import "./assets/css/CustomAdd.css";
import { useOutletContext } from "react-router-dom";

export default function CustomAdd(props) {
  const dispatch = useDispatch();
  const {currentUser}=useOutletContext();
  return (
      <>
      <h3>내 스타일 만들기</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(!currentUser){
            alert("로그인 후 이용하시기 바랍니다.");
            return;
          }
          const title = e.target.title.value;
          const body = e.target.body.value;

          dispatch(customAdd({ title, body }));
        }}
      >
        <input
          name="title"
          type="text"
          placeholder="스타일 이름을 입력하세요."
          className="custom-input"
        />
        <textarea
          name="body"
          placeholder="나만의 스타일을 만들어보세요."
          className="custom-textarea"
        />
        <button type="submit" className="custom-button">
          추가
        </button>
      </form>
      </>
  );
}

// 로그인 안하고 글쓰려고 했을때 예외처리 필요함.
