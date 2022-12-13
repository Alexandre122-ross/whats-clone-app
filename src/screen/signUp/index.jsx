
function SignUpScreen() {
  return (
    <>
      <input type='text' className='inputContainer' placeholder='Email' />
      <input type='text' className='inputContainer' placeholder='Username' />
      <input type='text' className='inputContainer' placeholder='Senha' />

      <button type='button' className='btnActionContainer'>
        Continuar
      </button>
    </>
  );
}

export default SignUpScreen;