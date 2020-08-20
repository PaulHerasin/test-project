import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
import ModalAuthentication from "./components/Modals/ModalAuthentication";

function App() {
  return (
    <div className="App">
      <Header />
      <ModalAuthentication></ModalAuthentication>
    </div>
  );
}

export default App;
