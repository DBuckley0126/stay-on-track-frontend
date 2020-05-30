import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Frame, AnimatePresence } from "framer";
import { appActions } from "./actions/index";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Frame onClick={() => dispatch(appActions.updateTest1("test_value"))}>Test button</Frame>
      <Frame style={{marginTop: 400}} onClick={() => dispatch(appActions.sagaTest1("api/v1/"))}>Test button2</Frame>
    </div>
  );
};

export default App;
