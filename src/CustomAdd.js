import { useDispatch } from "react-redux";
import { customAdd } from "./MHSlice";

export default function CutomAdd(props) {
// 원 스타일
// const styles = {
//   container: { padding: "20px", fontFamily: "Arial, sans-serif", width:"1000px", margin:"0px auto" },
//   header: { border: "1px solid black", padding: "10px", textAlign: "center" },
//   content: { display: "flex", gap: "20px" },
//   box: { flex: 1, border: "1px solid black", padding: "10px", overflowX: "auto", overflowY: "auto" },
//   input: { display: "block", width: "100%", margin: "10px 0" },
//   textarea: { display: "block", width: "100%", height: "80px", margin: "10px 0" },
//   button: { display: "block", width: "100px", marginTop: "10px" },
//   link: { textDecoration: "none", color: "blue" },
// };

const styles = {
  input: {
    display: "block",
    width: "96%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    display: "block",
    width: "96%",
    height: "100px",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    display: "block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
};

const dispatch = useDispatch();

return (
  <>
    <div style={styles.box}>
      <h3>내 스타일 만들기</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        dispatch(customAdd({title, body}));
      }}>
        <input name="title" type="text" placeholder="스타일 이름을 입력하세요." style={styles.input} />
        <textarea name="body" placeholder="나만의 스타일을 만들어보세요." style={styles.textarea} />
        <button type="submit" style={styles.button}>추가</button>
      </form>
    </div>
  </>

);
};
