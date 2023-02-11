import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Action from './components/Action';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode anable", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Day mode anable", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="Alibrothers" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route path='about' element={<About mode={mode}/>} ></Route> */}
        {/* <Route path='/' element={  */}
        <TextForm showAlert={showAlert} heading="Enter Your Text" mode={mode} />

        {/* </Route> */}
        {/* <Route path='action' element={ <Action mode={mode}/>} ></Route> */}
        {/* </Routes> */}
      </div>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
