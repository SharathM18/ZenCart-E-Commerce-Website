import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
