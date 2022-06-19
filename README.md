# 33기 1차 프로젝트 5팀 켓코독
![](https://velog.velcdn.com/images/cadyky95/post/c81173e4-05fe-444b-98e4-c987bb414754/image.png)

[🐶시연영상 보러가기](https://www.youtube.com/watch?v=mw0Opg8jc5Y&t=50s)

## 프로젝트 소개
• 반려동물과 반려인의 조화로운 삶을 위해 바르고 안전한 제품을 제안합니다. 반려 생활에 건강한 즐거움을 더하는 브랜드입니다.   
• 한정된 기간동안 기획과 디자인보다는 개발에 집중하기 위해서 일부를 (반려소반)을 참조하여 학습목적으로 제작하였습니다.   
• 코드 및 이미지를 남용 및 악용할 경우 법적으로 문제될 수 있습니다.   
• 이 프로젝트에서 사용되고 있는 로고 및 배너는 해당 프로젝트 팀 소유이므로 외부인이 허가없이 사용할 수 없습니다.

## 팀원 및 사용기술 스택

### 1. 팀원소개
• Front-end: 김철회, 윤경연, 남하임, 정재성, 안성주   
• Back-end: 강세영, 박준형   
• 개발기간 : 2022/05/24~2022/06/04

### 2. 사용기술 스택
• Front-end: HTML, SCSS, Javascript, React, React-Router   
• Back-end: Phython, Django, MySQL

## 🐭안성주-DeatilGoods Page 구현사항🐭
### 1. 리뷰 작성 및 별점 기능
![React_App_-_Chrome_2022-06-06_18-03-03_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/97432901/172131288-8a0f14f9-f911-4696-88b6-067cee6b8382.gif)

• 사용자가 입력한 값, 입력한 값을 담아둔 2개의 `useState`를 리뷰 작성 기능 구현   
• `Select/Option` 태그를 이용해서 사용자가 입력하고자 하는 별점의 `value`를 추출한 뒤 `props`로 별점 컴포넌트로 전달 후 `map함수` 사용
   
      
### 2. 제품 사진 리스트 클릭 시 메인이미지로 변경
![React_App_-_Chrome_2022-06-06_18-14-26_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/97432901/172133296-55fc452c-e435-44d0-820d-8ad8c388582e.gif)

• 제품 상세 목데이터 `fetch`로 받아와서 `useState` 저장 후 작업 진행 (백앤드에서 데이터 받아올때에는 주소만 변경해주면 된다.)   
• 제품 미니 사진 리스트의 첫 번째 사진이 메인 사진에 먼저 `useState`에 담긴다.   
• `onClick` 이벤트를 활용해 클릭한 사진이 메인 사진으로 변경되게 설정 (`useState` 사용)   

### 3. 제품 수량 선택 후 장바구니로 데이터 송신
![React_App_-_Chrome_2022-06-06_18-21-51_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/97432901/172134106-cbe00050-c45f-4cf5-b86b-3c88a7f31b32.gif)


• `Select/Option` 태그를 사용해서 사용자가 선택한 수량의 `value`를 추출한 뒤 `fetch`를 통해서 백앤드로 부터 수량 데이터를 전송하였다.   
• 구매하기 버튼을 누르면 장바구니창으로 이동이 가능하다.


## 프로젝트 협업 도구
### 1. Trello
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTgNmb%2FbtrDZvBpHZN%2Fsir2JKzcBW7mksljLbUmv0%2Fimg.png)
```
매일 스프린트 미팅에서 현재 진행 사항과 예상 작업 및 소요시간 공유
```
### 2. Slack 
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVIVki%2FbtrDWUCbBt6%2FonOMXKZt4UDxRrQIXejD4K%2Fimg.png)
```
팀원들의 개인적인 소통 및 참고 자료 공유
```
### 3. Notion
![](https://velog.velcdn.com/images/drbrain98/post/9293e60a-2b03-4c15-bba2-d05edad57556/image.png)
```
필수 구현 기능 및 추가 기능 사항(역활 및 분담 포함)에 대하여 상세한 정리
```
### 4. ERD
![](https://velog.velcdn.com/images/stresszero/post/54321f3f-a31d-415d-a046-3ac7b461bd19/image.PNG)
```
웹 사이트 DB 구성 방식을 즉각적으로 공유 -> 해당 자료를 참고해서 프론트에서 KEY값의 이름을 맞춰서 즉각적인 소통이 가능하였다.
```
 
