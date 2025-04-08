import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import './assets/css/Customize.css';

function Customize() {

  const currentUser = useSelector(state=>state.MH.currentUser);
  const userStyle = currentUser ? currentUser.userStyle : [];
  return (
    <div className="custom-container">
      <header className="custom-header">내 스타일 만들기</header>
      <div className="custom-content">
        <div className="custom-box">
          <Outlet context={{ currentUser }}></Outlet>
        </div>

        <div className="custom-box">
          <h3>내 스타일</h3>
          <ul>
            {currentUser ? 
            userStyle.length === 0 ? <p>스타일을 추가해주세요.</p> :
            userStyle.map(s=> <><li className="custom-list-item"><Link to={"/main/customize/update/"+s.title}>{s.title}</Link></li></>)
             : <p>로그인 후 이용하세요.</p>}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Customize;