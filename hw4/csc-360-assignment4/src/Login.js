import React, {useState, useEffect, useContext}  from "react";
import { ThemeContext } from './App';

export default function Login( {dispatch} ) {
  const [username, setUsername] = useState("")
  const theme = useContext(ThemeContext)
	
  function handleUsername (evt) { setUsername(evt.target.value) }

  useEffect(() => {
    console.log(username)
    return () => {console.log('component removed from DOM')}	
  }, [username])

  return (
    <form onSubmit={ (e) => {e.preventDefault(); dispatch({ type: 'LOGIN', username }) }}>
      <label style={ {color: theme.primary} } htmlFor="login-username">Username:</label>
      <input type="text" value={username} onChange={handleUsername}
	   name="login-username" id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0}/>
    </form>
  );
}

