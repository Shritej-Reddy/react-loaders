import React, { useState } from 'react';
import ClockLoader from "./components/Loaders/ClockLoader/ClockLoader";
import DeletingLoader from "./components/Loaders/DeletingLoader/DeletingLoader";
import FlatLoader from "./components/Loaders/FlatLoader/FlatLoader";
import LoadingStyle1 from "./components/Loaders/LoadingStyle1/LoadingStyle1";
import LoadingStyle2 from "./components/Loaders/LoadingStyle2/LoadingStyle2";
import LoadingStyle3 from "./components/Loaders/LoadingStyle3/LoadingStyle3";
import LoadingBoxes from "./components/Loaders/LoadingBoxes/LoadingBoxes";
import './App.scss'

function App() {

  const [loader, setLoader] = useState(1)

  setInterval(() => {
    let GameStateTemp = loader;
    GameStateTemp = GameStateTemp + 1;
    if (GameStateTemp === 7) {
      GameStateTemp = 1;
    }
    setLoader(GameStateTemp);
  }, 10000);

  return (
    <div className="App">
      {/* <ClockLoader />
      <DeletingLoader />
      <LoadingStyle1 />
      <LoadingStyle2 />
      <LoadingStyle3 />
      <FlatLoader />
      <LoadingBoxes /> */}

      {(() => {
        switch (loader) {
          case 1:
            return <ClockLoader />
          case 2:
            return <DeletingLoader />
          case 3:
            return <LoadingStyle1 />
          case 4:
            return <LoadingStyle2 />
          case 5:
            return <LoadingStyle3 />
          case 6:
            return <FlatLoader />
          case 7:
            return <LoadingBoxes />
          default:
            return null
        }
      })()}
    </div>
  );
}

export default App;
