import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './header';
import Home from './home';
import Checkout from './checkout.js';
import Login from './login.js'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout/>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home/>
              </>
            }
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
