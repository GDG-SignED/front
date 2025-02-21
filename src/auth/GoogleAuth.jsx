import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from "axios";

const GoogleAuth = () => {
  const navigate = useNavigate();
  
  // url에서 코드 추출
  const url = new URL(window.location.href)
  const code = url.searchParams.get("code");

  const LoginHandler = async code => {
    console.log("🔹 프론트에서 전송하는 Code:", code); 
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/google",
        { code : code},
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
      const accessToken = res.data.accessToken;
      localStorage.setItem("bagtoken", accessToken);
      console.log("백에서 받는 데이터: ", res.data);
      // navigate("/");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(code);
    if (code) {
      LoginHandler(code);
    } else {
      console.log("로그인을 재시도하세요");
    }
  })

  return (
    <div>
      구글로그인 처리
    </div>
  )
}

export default GoogleAuth;