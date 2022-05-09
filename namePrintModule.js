// export default 내보낼 하나의 함수나 객체만 내보낼 수 있다
// 이때, 중괄호 없이 가져올 수 있다(하나밖에 없으므로)
export default namePrintModule;

// export를 이용해서 모듈 내보내면
// 원하는 함수, 객체, 변수등을 보낼 수 있다 > 값이 여러개이므로 중괄호 사용
// 이름(식별자)은 고정
export function namePrintModule(name) {
    console.log(name+'입니다');
    console.log(age+'세 입니다');
}

let age = 20;
