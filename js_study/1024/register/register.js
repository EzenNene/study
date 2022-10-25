const userid = document.querySelector('#userid');
const pw1 = document.querySelector('#pw1');
const pw2 = document.querySelector('#pw2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const sexual = document.querySelector('#sexual');
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
    
    // 방법 1 ===========================================

    // let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), 
    //     fullnameConfirm(), emailConfirm(), telConfirm()]

    // let chkFlag = true;

    // for (const chk of chkArray) {
    //     // if (chk === false)
    //     if (!chk) { // 함수의 리턴값이 false 일 때
    //         chkFlag = false
    //     }
    // }

    // if (chkFlag) {
    //     document.signup.submit()
    // }

    // 방법 2 ===========================================

    const idConf = idConfirm()
    const pwd1Conf = pwd1Confirm()
    const pwd2Conf = pwd2Confirm()
    const fullnameConf = fullnameConfirm()
    const sexualConf = sexualConfirm() 
    const emailConf = emailConfirm()
    const telConf = telConfirm()

    if (idConf && pwd1Conf && pwd2Conf && fullnameConf && 
        sexualConf && emailConf && telConf) {
        document.signup.submit();
    }

})

function idConfirm() {

    const mustId = document.querySelector(".must_id")
    const overlap = document.querySelector(".overlap")

    // 텍스트가 남아있는 걸 방지하기 위해(초기화)
    mustId.style.display = "none"
    overlap.style.display = "none"

    // null, undefined, "", 0은 false
    // userid 가 빈문자열이 됐을 때
    // if (userid.value === "") {}

    if (!userid.value.replace(/ /g,"")) { // replace(/ |0/g,"") 넓은 공백 또는 0 제거
        mustId.style.display = "block"
        return false
    } else {
        if (!idCheck(userid.value.replace(/ /g,""))) { // 아이디가 중복이라면
            overlap.style.display = "block"
            return false
        }
    }

    return true

}

function pwd1Confirm() {

    const mustPwd1 = document.querySelector(".must_pwd1")
    const regPwd = document.querySelector(".reg_pwd")

    mustPwd1.style.display = "none"
    regPwd.style.display = "none"

    // pwd1 빈문자열 이라면
    if(!pwd1.value) {
        mustPwd1.style.display = "block"
        return false
    } else {
        if (!pwdCheck(pwd1.value)) { // 정규표현식에 맞지 않으면
            regPwd.style.display = "block"
            return false
        }
    }

    return true

}

function pwd2Confirm() {

    const mustPwd2 = document.querySelector(".must_pwd2")
    const same = document.querySelector(".same")

    mustPwd2.style.display = "none"
    same.style.display = "none"

    if(!pwd2.value) {
        mustPwd2.style.display = "block"
        return false
    } else {
        if (pwd1.value && pwd2.value) { // 두 패스워드 값이 있는지 확인
            if (pwd1.value !== pwd2.value) // 두 패스워드가 같지 않다면
            same.style.display = "block"
            return false
        }
    }

    return true

}

function fullnameConfirm() {

    const mustFullname = document.querySelector(".must_fullname")
    mustFullname.style.display = "none"

    if(!fullname.value) {
        mustFullname.style.display = "block"
        return false
    }

    return true

}

function sexualConfirm() {

    const mustSexual = document.querySelector(".must_sexual")

    mustSexual.style.display = "none"

    if(!mustSexual.value) {
        mustSexual.style.display = "block"
        return false
    }

    return true

}

function emailConfirm() {

    const mustEmail = document.querySelector(".must_email")
    const regEmail = document.querySelector(".reg_email")

    mustEmail.style.display = "none"
    regEmail.style.display = "none"

    if(!email.value) {
        mustEmail.style.display = "block"
        return false
    }

    return true

}

function telConfirm() {

    const regTel = document.querySelector(".reg_tel")
    regTel.style.display = "none"

    // 전화번호가 있고, 정규식 체크에 통과 못했을 때
    if(!telCheck(tel.value) && tel.value) {
        regTel.style.display = "block"
        return false
    }

    return true

}

// 중복된 아이디 체크
function idCheck (id) {
    return true;
}

// 비밀번호 정규식 체크
function pwdCheck(pwd) {
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd)
}

function telCheck (tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel)
}

function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}