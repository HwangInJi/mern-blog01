# MERN BLOG

저는 최근 프로젝트에서 MERN 스택을 활용하여 웹 애플리케이션을 개발했습니다. 프로젝트의 각 구성 요소는 다음과 같습니다.<br/>

MongoDB: 데이터베이스로 사용하여 사용자 정보와 애플리케이션 데이터를 효율적으로 저장하고 관리했습니다.<br/>
Express.js: 서버 사이드에서 API를 구축하고 라우팅을 처리하여 클라이언트와 서버 간의 통신을 원활하게 했습니다.<br/>
React: 사용자 인터페이스를 구성하여 동적이고 반응성이 뛰어난 UI를 제공했습니다. 컴포넌트 기반 구조를 통해 코드의 재사용성과 유지 보수성을 높였습니다.<br/>
Node.js: 서버 환경을 구축하고 비동기 I/O를 통해 높은 성능과 확장성을 제공했습니다.<br/>

- vite(https://ko.vitejs.dev/guide/)
- tailwind(https://tailwindcss.com/docs/guides/vite)

```bash
npm create vite@latest
cd client
npm i
npm run dev
```

## client

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i react-router-dom
npm i react-icons
```

## git과 연동(상위 폴더에)

```bash
git init
git add .
git commit -m "first"
git remote add origin https://github.com/HwangInJi/mern-blog01.git
git branch -M main
git push -u origin main
```
