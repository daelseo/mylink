# MyLink — daelseo

「아이디어를 현실로 - 바이브 코딩」 수업 과제로 만든 개인 링크 모음 페이지입니다.

## 제출 주소

- GitHub 저장소: https://github.com/daelseo/mylink
- MyLink: https://daelseo.github.io/mylink/

## 기능

- 프로필과 소개 문구
- Instagram, GitHub 저장소 목록, MyLink 소스 코드 링크
- 모바일·태블릿·데스크톱 반응형 화면
- 현재 페이지 주소 복사 (클립보드 사용이 불가능하면 수동 복사 창 표시)
- 키보드 포커스 표시 및 스크린 리더용 링크 안내

## 실행

별도 설치나 빌드 없이 `index.html`을 브라우저에서 열 수 있습니다.
로컬 서버를 쓰려면 이 폴더에서 `python -m http.server 4173`을 실행한 뒤 `http://localhost:4173`에 접속합니다.

## 배포

GitHub Pages에서 `main` 브랜치의 `/ (root)`를 배포 소스로 설정합니다.
`index.html`, `style.css`, `app.js`, `favicon.svg`, `.nojekyll`을 저장소 루트에 둡니다.

## 수정

이름, 소개, 링크는 `index.html`에서 수정합니다. 색상과 배치는 `style.css`에서 수정합니다.
이 프로젝트는 정적 개인 페이지이며 로그인·클라우드 데이터베이스·링크 관리 기능은 포함하지 않습니다.

## 제작

HTML, CSS, JavaScript로 구현했으며 Codex의 도움을 받아 제작했습니다.
교안 PDF나 강의 영상은 저장소에 포함하지 않습니다.
