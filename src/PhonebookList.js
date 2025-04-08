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
                <div class="uilist">
                    <ul>
                        {currentUser ? (
                            filteredList.map(c => (
                                <li key={c.contact} className="contact-item">
                                    <p>{c.name}</p>
                                    < Link className="contact-link" to={`${c.contact}`} >{c.name}</Link>
                                </li>
                            ))
                        ) : (
                            <p class="uselogin">로그인 후 이용하세요.</p>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}






