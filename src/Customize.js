import { useState } from 'react';
import CustomAdd from "./CustomAdd";
import CustomRead from "./CustomRead";
import { useDispatch, useSelector } from 'react-redux';
import { customArrAdd, customArrRender } from './MHSlice';
import { Outlet } from 'react-router-dom';


function App() {
  const arr=useSelector(state=>state.MH.basicStyle);
  const dispatch=useDispatch();
  // 리덕스로 상태값 변경 시작
  
  // const [arr,setArr]=useState([
  //   {id:1, title:"설날인사", body:"새해 복 많이 받으세요"},
  //   {id:2, title:"추석인사", body:"즐거운 추석 되세요."},
  // ]);
  let newArr=[...arr];
  const [nextId,setNextId]=useState(arr.length+1);
  const [selectT,setSelectT]=useState("");
  const [mode,setMode]=useState("write");
  let content=null;

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

  switch (mode){
    case "write":
    content=<CustomAdd onWrite={(title,body)=>{
      const arrInform={nextId,title,body};
      dispatch(customArrAdd(arrInform));
      setNextId(nextId+1);
    }
    }
    ></CustomAdd>
    break;
    
    case "update":
      content=<CustomRead arr={arr} nextId={nextId} selectT={selectT}
       newArr={newArr} onAdjustT={(title)=>{
        setSelectT({...selectT,title});
      }} onAdjustB={(body)=>{
        setSelectT({...selectT,body});
      }} onAlter={()=>{
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i].id === Number(selectT.id)) {
            newArr[i] = {
              id: Number(selectT.id),
              title:selectT.title,
              body: selectT.body
            };
            break;
          }
        }
        dispatch(customArrRender(newArr));
        // 여기2
      }} onDelete={()=>{
        newArr=newArr.filter((e)=>(e.id!==Number(selectT.id)));
        dispatch(customArrRender(newArr));
        //여기3
      }} onChangeMode={()=>{
        setMode("write");
      }}
      ></CustomRead>
    break;
  }

  return ( 
      <div style={styles.container} >
        <header style={styles.header}>내 스타일 만들기</header>
        <div style={styles.content}>
          {/* 왼쪽 박스 레이아웃  */}
          <div style={styles.box}>
            <h3>내 스타일 만들기</h3>
            {content}
          </div>

          {/* 오른쪽 박스 레이아웃  */}
          <div style={styles.box}>
            <h3>내 스타일</h3>
            <ul>
              {arr.map((item, index) => (
                <li key={index} style={{cursor:'pointer'}} onClick={(e)=>{
                  setSelectT({id:item.id,title:item.title,body:item.body});
                  setMode("update");
                }}>
                {item.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};
export default App;