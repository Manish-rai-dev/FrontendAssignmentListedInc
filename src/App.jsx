// import React from "react";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <main>
    <Routes>
    <Route path="/" element={<SignIn></SignIn>} />
    <Route path="/signup" element={<SignUp></SignUp>} />
    <Route path ="/dashboard" element={<Dashboard></Dashboard>}></Route>
     </Routes> 
  </main>
  </>
  );
}

export default App;