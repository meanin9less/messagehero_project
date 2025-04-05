import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="company_info">
        <ul>
          <li>
            문자 히어로 컴퍼니
          </li>
          <li>주소 : 서울특별시 강남구 하이미디어 학원</li>
          <li>대표: 최영웅</li>
          <li>
            대표번호 : 02-123-1234<br />
          </li>
          <li>고객센터 이메일 : contact@messagehero.co.kr</li>
          <li className="ft_copyright"> Copyright@ MessageHero co. Ltd. All rights reserved</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
