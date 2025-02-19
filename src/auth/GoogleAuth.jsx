import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from "axios";

const GoogleAuth = () => {
  const navigate = useNavigate();
  
  // 현재 url에서 access_token 추출
  const hash = window.location.hash;
  const token = hash.substring(hash.indexOf('=') + 1, hash.indexOf('&'));

  const LoginHandler = async token => {
    const data = {
      token : token,
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/google",
        data,
      ).then(function (res) {
        const jwt = res.data.jwt;
        const userName = res.data.name;

        localStorage.setItem("bagtoken", jwt);
        const redirectUrl = `/homepage`;
        navigate(redirectUrl);
        window.location.reload();
      })
        console.log(res.data);
        // const accessToken = res.data.accessToken;
        // localStorage.setItem("bagtoken", accessToken);
        // 메인페이지로 이동
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(token);
    if (token) {
      LoginHandler(token);
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