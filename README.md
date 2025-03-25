# Honda cafe 'The go' 웹사이트 리디자인 & 클론
<br>
메인, 로그인 페이지 반응형 웹사이트<br><br>
Demo : 
<br><br><br>
<img src="https://github.com/user-attachments/assets/e11fe06d-39c1-4015-a96e-959e2f44cd33" height="250">
<img src="https://github.com/user-attachments/assets/b17c8ac6-16e0-41c3-8fa5-a4ed3a70be2b" height="250">
<img src="https://github.com/user-attachments/assets/72ecb6af-a3ff-4442-9a47-14113f12675b" height="200">
<br><br><br>

## 목표
1. 사용자 편의성을 고려한 UI 개선
2. GSAP 활용하여 인터랙티브 웹 사이트 제작
3. 키보드 탭 포커스 관련 접근성 고려
<br><br><br>

## 사용 스킬
- HTML
- CSS
- JAVASCRIPT
- JQUERY
- GSAP
- SWIPER

<br><br><br>

## UI 개선사항
### 1. 슬라이드 carousel 형태로 배치
- 차량의 종류를 한눈에 파악하고 구분 가능<br>
<img width="400" src="https://github.com/user-attachments/assets/1caa28bd-9ff3-4946-83be-c2bdaa5c7290" />
<img width="400" src="https://github.com/user-attachments/assets/f5acadbd-228f-4bef-8f23-b76568af0453" />
<br>
<br>
<hr>

### 2. 자동차와 모터사이클 코스의 행을 달리 하고 배경이미지를 가리지 않도록 배치
- 배경 이미지 강조로 두 코스를 더욱 직관적으로 구분 가능<br><br>
<img width="600" src="https://github.com/user-attachments/assets/1828d715-351f-47c3-9aad-9a0e43a43ce7" />

<br>
<br>
<hr>

### 3. 예약하기 버튼과 스크롤바 추가
- 버튼 추가로 코스 확인 후 바로 예약 링크로 이동 가능<br>
- 스크롤바 추가로 다른 코스가 있음을 짐작 가능<br><br>
<img width="600" alt="image" src="https://github.com/user-attachments/assets/445172ed-e872-48b4-b8ca-010ad5b9d348" />

<br><br>
<hr>

### 4. 지도 영역 여백 추가
- PC버전에서 아래로 이동하기 위한 스크롤에 지도가 반응하는 것을 방지하기 위해 여백 추가 <br><br>
<img width="600" src="https://github.com/user-attachments/assets/f1bc7842-b16d-4d6a-903e-0b8cda2ca3e8" />

<br><br><br>
## 주요 기능
### 1. gnb 키보드 탭 포커스
   
### 2. 시승 차량 모델명 업데이트
<img width="400" alt="image" src="https://github.com/user-attachments/assets/bbebc4c7-2f80-44fb-b0f9-f4125fbba48a" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/1fa73adc-fb89-4a36-9d2a-76704216c2fe" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/7b3c7c47-2f5f-45eb-a1b2-7476c2797da4" />
<br><br>

**[관련 코드]**<br>
1️⃣ slide-item-name은 display: none;으로 설정하고 textContent로 활용

```html
<!--슬라이드 구조-->
<p class="slide-heading bike">모터사이클</p>
<p class="bike-name first-show"></p>
<div class="bike-slide">
  <div class="swiper bike-swiper">
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <p class="slide-item-name bike">XL750</p>
        <img
          class="bike-img"
          src="images/img-bike-XL750.png"
          alt="XL750"
        />
      </div>
      <div class="swiper-slide">
        <p class="slide-item-name bike">GB350C</p>
        <img
          class="bike-img"
          src="images/img-bike-GB350C.png"
          alt="GB350C"
        />
      </div>
        .
        .
        .
    </div>
  </div>
</div>
```
스크립트<br>
1️⃣ 현재 active된 슬라이드의 slide-item-name을 활용
슬라이드를 넘긴 후 다시 active클래스로 인한 애니메이션 효과를 위해 이전에 추가되었던 클래스를 지운다.
setTimeout으로 기다린 후 실행하도록 
setTimeout을 사용하는 이유는, active 클래스를 다시 추가하는 시점을 조정하기 위함입니다. updateName 함수에서 바로 showItemName을 호출하면, DOM 업데이트가 완료되기 전에 클래스가 추가될 수 있어 애니메이션 효과가 제대로 적용되지 않을 수 있습니다. 그래서 setTimeout을 사용하여 약간의 지연 시간을 주어, DOM이 업데이트된 후에 active 클래스를 추가하도록 합니다.


슬라이드 변경 시 updateName 호출: updateName 함수에서 슬라이드 이름을 초기화하고 active 클래스를 제거합니다.

클래스 제거 후, setTimeout을 통해 클래스 추가 지연: setTimeout을 사용해 약간의 시간을 두고 showItemName을 호출하여 새 이름을 반영하고 active 클래스를 추가합니다.

새로운 슬라이드에서 active 클래스 추가: 슬라이드가 변경된 후 새로운 슬라이드에 active 클래스가 제대로 추가되고 애니메이션이 적용됩니다.

```javascript
// =========== section04 Car / Bike Change Name ===========
swiper1.on("slideChange", function () {
  updateName(".car-swiper", ".car-name");
});
swiper2.on("slideChange", function () {
  updateName(".bike-swiper", ".bike-name");
});

function updateName(swiperSelector, nameSelector) {
  const itemName = document.querySelector(nameSelector);
  itemName.textContent = "";
  itemName.classList.remove("first-show", "active");
  setTimeout(() => {
    showItemName(swiperSelector, nameSelector);
  }, 100);
}

function showItemName(slideTarget, name) {
  const slide = document.querySelector(slideTarget);
  const itemName = document.querySelector(name);
  const activeSlide = slide.querySelector(".swiper-slide-active");
  const nameContent = activeSlide.querySelector(".slide-item-name").textContent;

  itemName.textContent = nameContent;
  itemName.classList.add("active");
}

showItemName(".car-swiper", ".car-name");
showItemName(".bike-swiper", ".bike-name");
```

<br>
이슈 - 코스부분 코스 클릭 시 해당 코스모달로 순서 이동하여 열리도록 한 부분 
gsap배우기 전 코드와 후
