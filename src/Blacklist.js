import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import'./assets/css/blacklist.css';

export default function Blacklist() {
    const navigate = useNavigate();
    const [inputContact, setInputContact] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputContact === "") {
            alert("번호를 입력해주세요");
            return;
        }
        navigate(`/main/blacklist/${inputContact}`);
    }

    return (
        <>
            <div className="likebody">
                <div className="blacklist">
                    <div>
                        <h3 className="findhzd">유해번호조회</h3>
                    </div>
                    <div>
                        <form onSubmit={handleSearch}>
                            <input
                                className="search"
                                type="text"
                                value={inputContact}
                                onChange={(e) => setInputContact(e.target.value)}
                                placeholder="번호를 입력하세요"
                            />
                            <button className="search-bt" type="submit">검색</button>
                        </form>
                    </div>
                    <div>
                        <Link className="report-link" to="/main/blacklist/blackListreport">유해번호 신고하기!</Link>
                    </div >
                
                        <Outlet></Outlet>
                   
               
                    <div class="five">
                        <strong className="prevention-title">보이스 피싱 예방 5계명</strong>
                        <ul className="prevention-list">
                            <li>경찰, 금감원이라며 금전을 요구하면 무조건 거절</li>
                            <li>메신저, 문자를 통해 금전을 요구하면 유선 확인 전까지 무조건 거절</li>
                            <li>등급 상향, 저금리 전환, 대출 수수료 명목 금전 요구는 무조건 거절</li>
                            <li>출처 불분명 앱, URL주소는 무조건 클릭 금지</li>
                            <li>사용하지 않은 결제 문자는 업체가 아닌 해당 카드사에 확인</li>
                        </ul>
                        <p className="contact-info">
                            경찰청: 1566-1188<br />
                            금융감독원: 1332<br />
                            스미싱 문자메시지 차단 신고: 118<br />
                            발신번호 변작 신고: 118
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
