const loginBtn = document.querySelector('.login-btn'),
      inputID = document.querySelector('.input-id'),
      inputPW = document.querySelector('.input-pw'),
      errorID = document.querySelector('.id-error'),
      errorPW = document.querySelector('.pw-error');

inputID.focus;

loginBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  //아이디 없을 떄
  if(inputID.value.length === 0 || inputID.value === null){
    inspectInput(inputID, errorID, '아이디를 입력해 주세요.');
    return;
  }
  //아이디 이메일 형식 확인
  if(inputID.value.indexOf('@') === -1 || inputID.value.indexOf('.') === -1){
    inspectInput(inputID, errorID, '이메일 주소를 확인해 주세요.');
    return;
  }
  //비번 없을 때
  if(inputPW.value.length === 0){
    inspectInput(inputPW, errorPW, '비밀번호를 입력해 주세요.');
    return;
  }
})

function inspectInput(input, errorArea, errorMessage){
  input.classList.add('active');
  errorArea.classList.add('active');
  errorArea.textContent = errorMessage;
  //reset input
  input.addEventListener('focus', (e)=>{
    input.classList.remove('active');
    errorArea.classList.remove('active');
  })
}