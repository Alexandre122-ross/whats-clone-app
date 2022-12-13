import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleActionForm = () => {
    let dataForm = { email, password };

    handleSignIn(dataForm, () => navigate('/', { replace: true }));
  };

  return (
    <>
      <input 
        type='text' 
        className='inputContainer' 
        placeholder='Email' 
        value={email}
        onChange={(ev) => setEmail(ev.target.value)} 
        />
      <input 
        type='text' 
        className='inputContainer' 
        placeholder='Senha' 
        value={password}
        onChange={(ev) => setPassword(ev.target.value)} 
      />

      <div className='navigationContainer'>
        <Link to='signUp'> Create Account </Link>
        <Link to=''> Forgot Password? </Link>
      </div>

      <button type='button' className='btnActionContainer' onClick={handleActionForm}>
        Continuar
      </button>
    </>
  )
}

export default SignInScreen;