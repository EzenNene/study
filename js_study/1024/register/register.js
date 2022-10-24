const userid = document.querySelector('#userid');
const pw1 = document.querySelector('#pw1');
const pw2 = document.querySelector('#pw2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');

submitButton.addEventListener('click', function() {

    // 아이디 : 공백여부, 중복여부
    // 비밀번호: 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리
    // 비밀번호 확인 : 공백여부 / 비밀번호와 같은지 확인
    // 이름 : 공백여부 / 
    // 메일주소 : 공백여부 / 메일형식에 맞는지(test@test.com)
    // 연락처(필수X) : 연락처 형식에 맞는지 (010-2222-3333)

})

function idConfirm() {
    if (!userid.value) {}
}
function pwdConfirm() {}
function pwd2Confirm() {}
function fullnameConfirm() {}
function emailConfirm() {}
function telConfirm() {}
