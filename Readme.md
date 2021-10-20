# Django + API Server + ReactJS Toy Project

* ananconda 활용하여 구축 

### 패키지정리

> * django 
> * djangorestframework ==> django API서버 라이브러리


### Architecture

> 코어 모델(모든 모델의 Path를 통제)


### NPM 설치 항목
* frontend 폴더 내부에서 설치해야함
1. npm init -y
2. npm i webpack webpack-cli --save-dev
3. npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
4. npm i react react-dom --save-dev
5. npm install @material-ui/core
6. npm install @babel/plugin-proposal-class-properties
7. npm install react-router-dom
8. npm install @material-ui/icons
9. 설치 후 babel.config.json파일 생성[fontend폴더]

### Npx로 설치
* frontend라는 폴더로 생성
1. npx create-react-app [appName]
2. 생성된 appName폴더 들어가서 npm start로 셋팅완료!!
3. https://react-bootstrap.github.io/getting-started/introduction ==> React-Bootstarp사용
4. index.js에 부트스트랩 경로 추가
5. React에서는 API와 통신할 때 Axios를 사용

### 고민사항
* axios를 사용하여 API와 통신, Django를 통한 통신??

### VSCode에서 Anacoda 설정 잡는법
1. Python Interperter 설정하기 ==> Ctrl + shift + P 를 눌러서 나오는 python:Select Interperter에서 내가 사용하고자 하는 가상환경을 선택

2. File - Preference - Setting [단축키 Ctrl + , ]에 들아가서 Workspace 선택 후 python: python path를
내가 사용하고자 하는 경로를 입력해준다.[서칭 결과 자동으로 되는 경우도 있는거 같은데 난 아니였음]