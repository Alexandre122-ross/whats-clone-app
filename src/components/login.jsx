import { Outlet, useLocation } from 'react-router-dom';
import LogoImg from '../imgs/logo.png';
import './style.login.css';

function LoginComponents() {
  const location = useLocation();

  return (
    <div className='loginContainer'>
      <img src={LogoImg} alt='Logo WhatsApp' className='logoImage' />

      <div className='formContainer'>
        <div className='titleContainer'>
          {location.pathname === '/login'
            ? (
              <>
                <h2 className='titleText'> Sign In </h2>
                <h3 className='subTitleText'> to your account </h3>
              </>
            )
            : <h2 className='titleText'> Sign Up </h2>}
        </div>

        <form className='formDataContainer'>
          <Outlet />
        </form>
      </div>
    </div>
  );
}

export default LoginComponents;