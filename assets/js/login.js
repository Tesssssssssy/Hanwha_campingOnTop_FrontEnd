const backend = "http://localhost:8080";

const login = async () => {
  try {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = {
      username: email,
      password: password,
    };

    let response = await axios.post(backend + "/user/login", data);

    console.log(response.data); // 응답 데이터 전체를 출력

    if (response.data.token) {
      let token = response.data.token;
      console.log("token:", token);

      window.localStorage.setItem("token", token);
      console.log(window.localStorage.getItem('token'));

      window.location.href = "/html/home.html";
    } else {
      console.error("토큰 발급 실패");
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

// HTML에서 직접 호출할 수 있도록 함수를 export
window.login = login;
