import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Blacklist() {
    const navigate = useNavigate();
    const [inputContact, setInputContact] = useState("");
    return (
        <>
            <div>
                <h3>유해번호조회</h3>
            </div>
            <div>
                <form onClick={(e=>{
                    e.preventDefault();
                })}>
                <input type="text" value={inputContact} onChange={(e) => {
                    setInputContact(e.target.value);
                }}></input>
                <button onClick={(e) => {
                    if (inputContact === "") {
                        alert("번호를 입력해주세요");
                        return;
                    }
                    navigate(`/header/blacklist/${inputContact}`);
                    setInputContact(e.target.value);
                }}>검색</button>
                </form>
            </div>
            <div>
                <Link to="/header/blacklist/blackListreport">유해번호 신고하기!</Link>
            </div>
            <Outlet></Outlet>
            <div>
                <p>보이스 피싱 예방 5계명</p>
                <p>
                    경찰, 금감원이라며 금전을 요구하면 무조건 거절

                    메신저, 문자를 통해 금전을 요구하면 유선 확인 전까지 무조건 거절

                    등급 상향, 저금리 전환, 대출 수수료 명목 금전 요구는 무조건 거절

                    출처 불분명 앱, URL주소는 무조건 클릭 금지

                    사용하지 않은 결제 문자는 업체가 아닌 해당 카드사에 확인
                </p>
                <p>
                    경찰청: 1566-1188

                    금융감독원: 1332

                    스미싱 문자메세지 차단 신고: 118

                    발신번호 변작 신고: 118
                </p>
            </div>
        </>
    )
}