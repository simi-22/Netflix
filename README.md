
### Skill
React, Javascript, Axios, React Query, Slick-Slider, Bootstrap

### Data
TMDB API

### Deploy
Netlify

### Works
React-Router페이지구현, 커스텀 훅을 만들어 api 호출

---

## Axios
node.js 와 browser 를 위한 Http 통신 라이브러리
```npm install axios```

### 4가지 메소드
1.GET : 서버에서 어떤 데이터를 가져와서 보여줌
2.POST : 서버로 데이터를 보냄
3.PUT : 데이터베이스 내부 내용 갱신
4.DELETE : 데이터베이스 내부 내용 삭제

### 정보
1.어떤 메소드를 사용할 것인지
2.url 주소
3.data (선택적)
4.params(선택적)

### 기본적인 형식
```
axios({
    //request
    method: "get",
    url: "url",
    responseType: "type"
}).then(function (response) {
    // response Action
});
```

### 참고
[React에서 Axios를 이용해 API 호출하기 (feat. fetch, ajax)](https://velog.io/@devstone/React%EC%97%90%EC%84%9C-Axios%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-API-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0-feat.-fetch-ajax)
[Axios를 이용해 Api 호출하기](https://velog.io/@seongolee/Axios%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-Api-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0)

---
