import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import NasaPhoto from "./NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" exact />
      </div>
    </BrowserRouter>
  );
}