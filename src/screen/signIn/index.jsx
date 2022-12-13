import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import InputDataComponent from '../../components/inputData';

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
      <InputDataComponent
        type='email'
        nameInput='emailInput'
        labelText='Email'
        inputValue={email}
        handleChange={setEmail}
      />
      <InputDataComponent
        type='password'
        nameInput='passwordInput'
        labelText='Password'
        inputValue={password}
        handleChange={setPassword}
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