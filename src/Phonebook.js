
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
            <form onSubmit={(e)=>{
                e.preventDefault();
                const contact = {name: e.target.name.value, contact: e.target.contact.value, etc: e.target.etc.value};

            }}>
                <label>이름</label>
                <br></br>
                <input type="text" name="name"></input>
                <br></br>
                <label>전화번호</label>
                <br></br>
                <input type="text" name="contact"></input>
                <br></br>
                <label>기타</label>
                <br></br>
                <input type="text" name="etc"></input>
                <br></br>
                <button type="submit">추가</button>
            </form>
        </div>
    </>
)
}