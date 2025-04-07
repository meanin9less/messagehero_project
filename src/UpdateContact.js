import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteContact, updateContact } from "./MHSlice";

export default function UpdateContact() {
  const currentUser = useSelector(state => state.MH.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentContactNum } = useParams();
  const currentContact = currentUser 
    ? currentUser.contacts.find(c => c.contact === currentContactNum) 
    : null;
  
  const [name, setName] = useState(currentContact? currentContact.name : "");
  const [contact, setContact] = useState(currentContact? currentContact.contact : "");
  const [etc, setEtc] = useState(currentContact? currentContact.etc : "");

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setContact(currentContact.contact);
      setEtc(currentContact.etc || "");
    } else {
      setName("");
      setContact("");
      setEtc("");
    }
  }, [currentContact]);

  return (
    <>
      <h4>연락처 수정</h4>
      {currentUser ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <label>이름</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <label>전화번호</label>
          <input 
            type="text" 
            value={contact} 
            onChange={(e) => setContact(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <label>기타</label>
          <input 
            type="text" 
            value={etc} 
            onChange={(e) => setEtc(e.target.value)} 
          />
          <button onClick={(e)=>{
            let count = 0;
            for(let i = 0; i < currentUser.contacts.length; i++){
                if(currentUser.contacts[i].contact === contact){
                    count++;
                }
            }
            if(count>0){
                alert("중복된 번호입니다.");
                return;
            }
            dispatch(updateContact({ currentContactNum, name, contact, etc}));
            navigate("/main/phonebook");
          }}>수정</button>
          <button onClick={(e)=>{
            dispatch(deleteContact(currentContactNum));
            navigate("/main/phonebook");
          }}>삭제</button>
        </form>
      ) : (
        <form>
          <label>이름</label>
          <input type="text" />
          <label>전화번호</label>
          <input type="text" />
          <label>기타</label>
          <input type="text" />
          <button onClick={(e) => alert("로그인 후 이용하세요.")}>수정</button>
          <button onClick={(e) => alert("로그인 후 이용하세요.")}>삭제</button>
        </form>
      )}
    </>
  );
}