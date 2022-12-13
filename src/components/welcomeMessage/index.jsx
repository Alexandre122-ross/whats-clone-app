import LogoImage from '../../imgs/logo_main.png';
import './style.welcomeMessage.css';

function WelcomeMessageComponent() {
  return (
    <div className='welcomeContainer'>
      <img src={LogoImage} alt='WhatsApp Logo' />
      <h2 className='welcomeText'> WhatsApp for Computer </h2>
    </div>
  );
}

export default WelcomeMessageComponent;