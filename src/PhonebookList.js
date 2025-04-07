import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PhonebookList() {
  const currentUser = useSelector(state => state.MH.currentUser);
  const contactList = currentUser ? currentUser.contacts : [];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = searchTerm
    ? contactList.filter(c => c.name.includes(searchTerm))
    : contactList;

  return (
    <>
      <div>
        {currentUser ? (
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value);}}
          />
        ) : (
          <input type="text" placeholder="로그인 후 이용하세요." />
        )}
      </div>
      
      <div>
        <h4>연락처목록</h4>
        <form>
          <ul>
            {currentUser ? 
              (filteredList.map(c => (
              <li key={c.contact}>
                <p>{c.name}</p>
                <Link to={c.contact}>{c.name}</Link>
              </li>
            ))) : <p>로그인 후 이용하세요.</p>}
          </ul>
        </form>
      </div>
    </>
  );
}