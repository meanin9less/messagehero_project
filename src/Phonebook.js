
export default function Phonebook() {
return (
    <>
        <div>
            <h3>연락처</h3>
        </div>
        <div>
            <input type="text"></input>
            <button>검색</button>
        </div>
        <div>
            <h4>연락처목록</h4>
            <ul>
                <p>연락처 리스트 들어갈 자리</p>
            </ul>
        </div>
        <div>
            <form>
                <div>
                    <label>이름</label>
                    <br></br>
                    <input type="text"></input>
                    <br></br>
                    <label>전화번호</label>
                    <br></br>
                    <input type="text"></input>
                    <br></br>
                    <label>기타</label>
                    <br></br>
                    <input type="text"></input>
                    <br></br>
                </div>
            </form>
        </div>
    </>
)
}