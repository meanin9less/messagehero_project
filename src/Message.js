export default function Message() {
    return (
        <>
            <div>
                <h3>문자메세지</h3>
                <textarea></textarea>
                <button>전송</button>
            </div>
            <div>
                <h3>서식</h3>
                <div>
                    <p>서식이 들어갈 자리</p>
                </div>
            </div>
            <div>
                <h3>연락처</h3>
                <ul>
                    <p>연락처 리스트 자리</p>
                </ul>
                <h3>수신자 목록</h3>
                <ul>
                    <p>수신자 목록이 들어갈 자리</p>
                </ul>
            </div>
        </>
    )
}