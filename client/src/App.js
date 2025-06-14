
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserRegister from "./pages/UserRegister";
import VendorRegister from "./pages/VendorRegister";
import VendorLogin from './pages/VendorLogin';
import Buy from "./pages/buy";
import UserLogin from './pages/UserLogin';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register-buyer" element={<UserRegister />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/login-vendor" element={<VendorLogin />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="login-buyer" element={<UserLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;















































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
