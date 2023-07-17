# todolsit

- 만드는 순서
  1. html
     1. 제목
     2. input
     3. button
     4. input받은 내용이 보여질 곳
  2. css
     1. html의 내용이 모두 중앙에 위치하게
     2. [1-4]의 공간을 표시
        - width, height, background-color 설정
  3. javascript
     1. [1-2]의 js 속성을 가져와서 변수에 담는다.
     2. [1-3]의 js 속성을 가져와서 변수에 담는다.
     3. [1-4]의 js 속성을 가져와서 변수에 담는다.
     4. [3-2]의 이벤트가 click일 때
        - createElement로 div or p 요소 만들어 변수에 담는다.
        - 생성된 엘리먼트.innerText에 [3-1]의 변수.value 값을 할당한다.
        - 생성된 엘리먼트를 [3-3]에 appendChild를 이용해 추가한다.
  4. typescript
     1. javascript 코드를 typescript로 마이그레이션
