
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';



function Customize() {
  // 리덕스로 상태값 변경 시작

  // const [arr,setArr]=useState([
  //   {id:1, title:"설날인사", body:"새해 복 많이 받으세요"},
  //   {id:2, title:"추석인사", body:"즐거운 추석 되세요."},
  // ]);

  // 스타일 원본
  // const styles = {
  //   container: { padding: "20px", fontFamily: "Arial, sans-serif", width:"1000px", margin:"0px auto" },
  //   header: { border: "1px solid black", padding: "10px", textAlign: "center" },
  //   content: { display: "flex", gap: "20px" },
  //   box: { flex: 1, border: "1px solid black", padding: "10px", overflowX: "auto", overflowY: "auto" },
  //   input: { display: "block", width: "100%", margin: "10px 0" },
  //   textarea: { display: "block", width: "100%", height: "80px", margin: "10px 0" },
  //   button: { display: "block", width: "100px", marginTop: "10px" },
  // };

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "1100px",
      margin: "0 auto",
      // backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    header: {
      borderBottom: "2px solid #ddd",
      paddingBottom: "10px",
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
    },
    content: {
      display: "flex",
      gap: "30px",
    },
    box: {
      flex: 1,
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      minHeight: "400px",
    },
    listItem: {
      cursor: "pointer",
      padding: "8px",
      borderBottom: "1px solid #eee",
    },
  };
  const currentUser = useSelector(state=>state.MH.currentUser);
  const userStyle = currentUser ? currentUser.userStyle : [];
  return (
    <>
      <div style={styles.container} >
        <header style={styles.header}>내 스타일 만들기</header>
      </div>
      <Outlet></Outlet>
      <div style={styles.box}>
        <h3>내 스타일</h3>
        <ul>
          {currentUser ? 
            userStyle.length === 0 ? <p>스타일을 추가해주세요.</p> :
            userStyle.map(s=> <><li><Link to={"/main/customize/update/"+s.title}>{s.title}</Link></li></>)
             : <p>로그인 후 이용하세요.</p>}
        </ul>
      </div>
    </>
  );
};
export default Customize;