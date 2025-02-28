import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  function gotoLogin() {
    navigate('/login-page');
  }

  return (
    <div className="class-left-section">
      <h2>로그인 후에 같이 공부해보아요!</h2>
      <button className="class-login-button" onClick={gotoLogin}>로그인/회원가입 →</button>
    </div>
  )
}

export default Logout
