import {Link} from 'react-router-dom';
import './css/Nav.css';
import Logo from '../assets/images/logo.png';

function Nav() {
  return (
    <div>
      <div className='navbar'>
        <Link className='logo' to={'/'}>  
          <img src={Logo} alt='Logo' className='logo-img' />
        </Link>
        <Link className='navbarMenu' to={'/class-main-page'}>클래스</Link>
        {/* <Link className='navbarMenu' to={'/'}>커뮤니티</Link> */}
        <Link className='navbarMenu' to={'/test-main-page'}>테스트</Link>
        <Link className='navbarMenu' to={'/'}>유료서비스</Link>
        <Link className='navbarMenu' to={'/'}>로그인/회원가입</Link>

      </div>
    </div>
  )
}

export default Nav;