import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Frame, AnimatePresence } from "framer";

const LoginButton = () => {
  const dispatch = useDispatch();
  const loginWithRedirect = useSelector(state => state.user.loginWithRedirect);

  const hoverStyle = () => {
    return {
      scale: 1.05,
      shadow: "rgb(132, 232, 232)",
      backgroundColor: "rgb(232, 232, 232)"
    };
  };


  return (
    <Frame
    onClick={() => loginWithRedirect()}
    id="splash-screen-login-button"
    whileHover={() => hoverStyle()}
    style={{
      backgroundColor: "rgb(132, 232, 232)",
      cursor: "pointer"
    }}
    center
  >
    Login/Signup
  </Frame>
  )
}

export default LoginButton;
