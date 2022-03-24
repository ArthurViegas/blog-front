import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';


function LoginForm() {
  const { setAccessToken } = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = {
    email,
    password
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const request = await fetch('https://viegas-blog-api.herokuapp.com/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(userData)
    })
    const data = await request.json()
    setAccessToken(data.token);
  }

 return(
   <div className='form-container'>
    <form>
      <input
        value= {email}
        type='email'
        onChange={ ({target}) => setEmail(target.value)}
      />
      <input
        value= {password}
        type='password'
        onChange={ ({target}) => setPassword(target.value)}
      />
      <button
        type='button'
        onClick={ handleSubmit }
      > Login </button>
    </form>
   </div>
 )
}
export default LoginForm;