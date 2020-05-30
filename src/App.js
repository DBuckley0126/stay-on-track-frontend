import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Frame, AnimatePresence } from "framer";
import { updateTest1 } from "./appActions";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Frame onClick={() => dispatch(updateTest1("test_value"))}>Test button</Frame>
    </div>
  );
};

export default App;
