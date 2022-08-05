# 원티드 8월 FE 챌린지 사전 과제

## 기술스택
* React
* Typescript
* react-query
* json-server

## 구현기능
1. Login / SignUp
2. Todo List (CRUD)

## 챌린지하며 알게 된 것
### React-query 관련
* react-query가 @tanstack/react-query로 바뀌었다.
* 최상단에 QueryClientProvider를 두고 App과 Router를 감싸준다.
* QueryClientProvider에 client props로 QueryClient 객체를 내려준다.
* useQuery(queryKey, callbackFn);
  * queryKey: 캐싱할 때 사용될 키, 문자열
  * callbackFn: Promise 리턴
  ```
  useQuery('login', () => {
    return axios.get('http://localhost:4000/data');
  });
  ```
* useQuery의 내용을 console에 찍어본 결과, 다음과 같은 property가 있다는 걸 알게 되었다. <br/>
  (비구조화 할당으로 꺼내쓰기) <br/>
  <img src="https://user-images.githubusercontent.com/68722179/183005676-8161bc09-6f9e-4655-a8d0-75b549cf33ab.png" width="250" />
* useQuery를 사용하면 useState와 useEffect가 필요없어진다. <br/>
  (받아온 데이터나 상태를 바로 사용 가능)
* ✨중요!!: 버전 4부터 queryKey를 배열([ ]) 형태로 넣어줘야 한다. (이렇게 안 해주면 data를 받아오지 못함)
* react-query는 모든 쿼리 결과에 대한 값을 default로 5분 동안 저장한다. (그동안은 refetching을 하지 않음)

### Typescript 에러 처리
* isLoading과 isError를 처리하는 util 함수 manageStatus의 error 인수 타입 처리에서
 * 'Object is of type 'unknown'.' 이라는 에러 발생
 * 즉, useQuery를 통해 얻은 error가 unknown 타입이어서 error.message 실행이 불가능했음
 * error의 타입을 지정할 때 제네릭 개념을 사용하여 문제 해결
 ```
 interface StatusType {
  isLoading: boolean;
  isError: boolean;
}

 type ErrorType<T> = {
  error: T | unknown;
};

export const manageStatus = (
  { isLoading, isError }: StatusType,
  { error }: ErrorType<object>
) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return <h2>{Object(error).message}</h2>;
  }
};
 ```
