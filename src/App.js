import React from "react";
// import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <div className=" bg-fixed bg-gray-50 bg-cover  text-gray-600">
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/react-rekuensi27/" component={Home} />
      </Switch> */}
      <Home />
    </div>
  );
}
