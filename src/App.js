import React from "react";
import Header from "././Components/Header/Header";

import Sidebar from "././Components/Sidebar/Sidebar";
import Feed from "././Components/Feed/Feed";
import Widgets from "././Components/Widgets/Widgets";

import Login from "././Components/Login/Login";

import "./App.css";
import { useStateValue } from "./StateMangement/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
