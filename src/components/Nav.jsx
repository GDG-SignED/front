import {Link} from 'react-router-dom';
import '../css/Nav.css';
import Logo from '../assets/images/logo.png';

function Nav() {
  return (
    <div>
      <div className='navbar'>
        <Link className='logo' to={'/'}>  
          <img src={Logo} alt='Logo' />
        </Link>
        <Link className='navbarMenu' to={'/'}>홈</Link>
        <Link className='navbarMenu' to={'/class-main-page'}>클래스</Link>
        <Link className='navbarMenu' to={'/'}>커뮤니티</Link>
        <Link className='navbarMenu' to={'/'}>테스트</Link>
        <Link className='navbarMenu' to={'/'}>유료서비스</Link>
      </div>
    </div>
  )
}

export default Nav;