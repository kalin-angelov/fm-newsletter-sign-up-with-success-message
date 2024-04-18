import "./App.css"

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Message from "./components/Message/Message";
import { Context } from "./context/Context";

function App() {
  const [email, setEmail] = useState('');
  const contextValue = {
    email,
    setEmail
  };

  return (
    <Context.Provider value={contextValue} >
      <>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/success" element={<Message />} />
        </Routes>
        <Footer />
      </>
    </Context.Provider>
  );
};

export default App;