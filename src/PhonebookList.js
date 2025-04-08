import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PhonebookList() {
    const currentUser = useSelector(state => state.MH.currentUser);
    const contactList = currentUser ? currentUser.contacts : [];
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const filteredList = searchTerm
        ? contactList.filter(c => c.name.includes(searchTerm))
        : contactList;
    
    return (
        <>
            <div className="search-phone-num">
                {currentUser ? (
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="연락처 검색"
                    />
                ) : (
                    <input type="text" placeholder="로그인 후 이용하세요." disabled />
                )}
            </div>

            <div className="contact-list">
                <h4 className="title">연락처 목록</h4>
                <ul>
                    {currentUser ? 
                        contactList.length === 0 ? <p>연락처를 추가해주세요.</p> :
                        filteredList.map(c =>(
                            <li onClick={()=>{
                                navigate(`/Main/phonebook/${c.contact}`);
                            }} key={c.contact} className="contact-item">
                                <span class="list-name">{c.name}</span>
                                <span class="list-contact">{c.contact.length < 8 ? c.contact : 
                                                        c.contact.length === 8 ? c.contact.replace(/(\d{4})(\d{4})/, "$1-$2") : 
                                                        c.contact.length === 9 ? c.contact.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3") : 
                                                        c.contact.length === 10 && c.contact.startsWith("02") ? c.contact.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3") :
                                                        c.contact.length === 10 ? c.contact.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") :
                                                        c.contact.length === 11 ? c.contact.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3") : c.contact}</span>
                                <span class="list-etc">{c.etc === "" ? "" : `${c.etc}`}</span>
                            </li>
                        )
                    ) : (
                        <p>로그인 후 이용하세요.</p>
                    )}
                </ul>
            </div>
        </>
    );
}






