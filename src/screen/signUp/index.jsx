import { useState } from 'react';
import InputDataComponent from '../../components/inputData';

function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
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
        labelText='Username'
        nameInput='usernameInput'
        inputValue={username}
        handleChange={setUsername}
      />
      <InputDataComponent
        type='password'
        nameInput='passwordInput'
        labelText='Password'
        inputValue={password}
        handleChange={setPassword}
      />

      <button type='button' className='btnActionContainer'>
        Continuar
      </button>
    </>
  );
}

export default SignUpScreen;