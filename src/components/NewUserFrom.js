import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';


function NewUserForm() {
  const { setAccessToken } = useContext(AppContext);

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = {
    displayName,
    email,
    password,
    image: 'null'
  }
console.log(userData);
  async function handleSubmit(e) {
    e.preventDefault();
    const request = await fetch('https://viegas-blog-api.herokuapp.com/user', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(userData)
    })
    const data = await request.json()
    console.log(data);
    setAccessToken(data.token);
  }

 return(
   <form>
    <input
      value= {displayName}
      type='email'
      onChange={ ({target}) => setDisplayName(target.value)}
    />
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
     > Sign up </button>
   </form>
 )
}
export default NewUserForm;