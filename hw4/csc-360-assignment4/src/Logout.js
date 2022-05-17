import React, {useContext} from "react";
import {StateContext} from './contexts';

export default function Logout() {
  const stateContext = useContext(StateContext)

  return (
    <form onSubmit={(e) => {e.preventDefault(); stateContext.dispatch({ type: 'LOGOUT' }) }}>
      Logged in as: <b>{stateContext.state.user}</b>
      <input type='submit' value='Logout' />
    </form>
  );
}

