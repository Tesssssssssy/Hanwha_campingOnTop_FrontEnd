function next2() {
    console.log("test");

    let signup_email_wrapper = document.getElementsByClassName(
      "signup-email-wrapper"
    )[0];
    let signupContainer = signup_email_wrapper.parentElement;

    signup_email_wrapper.remove();

    let signup_progress_icon = document.getElementsByClassName(
      "signup-progress-icon"
    )[0];
    let step = signup_progress_icon.getAttribute("step");
    
    signup_progress_icon.classList.remove("step" + step);
    signup_progress_icon.classList.add("step" + (Number(step) + 1));
    signup_progress_icon.setAttribute("step", Number(step) + 1);

    let signup_email_contents = document.createElement("div");
    signup_email_wrapper.classList.add("signup-email-contents");

    signup_email_contents.innerHTML='<div class="signup-email-wrapper"><h3 class="signup-email-title">회원가입 완료!<br>Welcome CampingOnTop</h3></div>';

    signupContainer.appendChild(signup_email_contents);


  }

  function validationEmail(event) {
    let btn = document.getElementsByClassName("signup-progress-btn");

    if (event.value != "") {
      btn[0].classList.remove("disabled");
      btn[0].removeAttribute("disabled");
    } else {
      btn[0].classList.add("disabled");
      btn[0].setAttribute("disabled", "");
    }
  }
  function next() {
    let signup_agreement_wrapper = document.getElementsByClassName(
      "signup-agreement-wrapper"
    )[0];

    let signupContainer = signup_agreement_wrapper.parentElement;
    signup_agreement_wrapper.remove();
    console.log(signupContainer);
    let signup_progress_icon = document.getElementsByClassName(
      "signup-progress-icon"
    )[0];

    let step = signup_progress_icon.getAttribute("step");
    signup_progress_icon.classList.remove("step" + step);
    signup_progress_icon.classList.add("step" + (Number(step) + 1));
    signup_progress_icon.setAttribute("step", Number(step) + 1);

    let signup_email_wrapper = document.createElement("div");
    signup_email_wrapper.classList.add("signup-email-wrapper");

    signup_email_wrapper.innerHTML =
      '<h3 class="signup-email-title">로그인에 사용할<br>아이디를 입력해주세요.</h3><div class="signup-email-contents"><input class="signup-email-input" placeholder="아이디 (이메일) 입력" oninput="validationEmail(this)" type="text" name="username"></div><div class="signup-email-contents"><input class="signup-email-input" placeholder="비밀번호 입력" oninput="validationEmail(this)" type="password" name="username"></div><button onclick="next2()" class="signup-progress-btn disabled" type="button" disabled>다음</button>';
    signupContainer.appendChild(signup_email_wrapper);
  }

  function checkAgreement() {
    let requiredTags = document.getElementsByClassName(
      "agreement-check required"
    );

    let requiredStatus = true;

    for (let i = 0; i < requiredTags.length; i++) {
      requiredStatus = requiredStatus && requiredTags[i].checked;
    }

    let btn = document.getElementsByClassName("signup-progress-btn");

    if (requiredStatus) {
      btn[0].classList.remove("disabled");
      btn[0].removeAttribute("disabled");
    } else {
      btn[0].classList.add("disabled");
      btn[0].setAttribute("disabled", "");
    }
  }
  function allAgree() {
    let inputTags = document.getElementsByClassName("agreement-check");
    if (!inputTags[0].checked) {
      for (let i = 0; i < inputTags.length; i++) {
        inputTags[i].checked = true;
      }
    } else {
      for (let i = 0; i < inputTags.length; i++) {
        inputTags[i].checked = false;
      }
    }

    checkAgreement();
  }

  function agree(event) {
    event.getElementsByTagName("input")[0].checked =
      !event.getElementsByTagName("input")[0].checked;

    let inputTags = document.getElementsByClassName("agreement-check");
    let temp = true;

    for (let i = 1; i < inputTags.length; i++) {
      temp = inputTags[i].checked && temp;
    }

    inputTags[0].checked = temp;
    checkAgreement();
  }

  let inputTags = document.getElementsByClassName("agreement-check");
  for (let i = 1; i < inputTags.length; i++) {
    inputTags[i].addEventListener("click", agree);
  }