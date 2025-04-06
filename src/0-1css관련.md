# 웹폰트 url
*웹폰트 js
- css용 링크(나눔스퀘어라운드)
@font-face {
  font-family: 'NanumSquareRound';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
  font-weight: lighter;
  font-style: normal;
}

- index.html용 링크(나눔명조): index.css에 적용
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/NanumMyeongjo/NanumMyeongjo.css"
    type="text/css" />

# 웹폰트 적용
- css 적용(import 확인)
* {
  font-family: 'NanumSquareRound', sans-serif;
}


# 수정된 파일
* 1. Header.js ,Header.css: 헤더 구조 및 css수정
  2. index.html , index.css or main.css(예정): 웹폰트 수정 예정
  3. Main.js, Main.css: 메인 구조 대대적 개선, 메인 css 수정

 # 생성된 파일 
 1. Header.css 및 src의 img 파일들
 2. 새로 생성(1.footer, 2.footer.css)
 
 

