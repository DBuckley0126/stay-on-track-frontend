import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Frame, AnimatePresence } from "framer";
import { testButtonGet } from "./appActions";

import NanoleafManager from "./managers/NanoleafManager"


const App = () => {
  const dispatch = useDispatch();

  const nanoleafManager = new NanoleafManager("192.168.0.2");

  return (
    <div className="App">
      {/* <Frame onClick={() => dispatch(testButtonGet())}></Frame> */}
    </div>
  );
};

export default App;
