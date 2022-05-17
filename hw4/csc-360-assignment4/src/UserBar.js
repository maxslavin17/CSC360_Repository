import React, { useState, useContext } from "react";
import {StateContext} from './contexts';
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar() {
  const stateContext = useContext(StateContext)
  const state = stateContext.state
  const dispatch = stateContext.dispatch
  
  if (state.user) {
    return <Logout user={state.user} dispatch={dispatch} />;
  } else {
    return (
      <>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </>
    );
  }
}
