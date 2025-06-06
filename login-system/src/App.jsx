import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Payment from "./components/Payment";
import Fine from "./components/Fine";
import History from "./components/History"
import Profile from "./components/profile";
import UserDashboard from "./components/user/UserDashboard";
import PaymentHistory from "./components/user/PaymentHistory";
import CarStatus from "./components/user/CarStatus";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const location = useLocation();

  // Routes where the Sidebar should not appear
  const hideSidebarRoutes = ["/","/signup","/UserDashboard","/PaymentHistory","/CarStatus"];

  return (
    <div style={{ display: "flex" }}>
      {/* Conditionally render Sidebar */}
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>} />
          {/* {<PrivateRoute><Home /></PrivateRoute>} /> */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/Payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
          <Route path="/Fine" element={<PrivateRoute><Fine /></PrivateRoute>} />
          <Route path="/History" element={<PrivateRoute><History /></PrivateRoute>} />
          <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/PaymentHistory" element={<PaymentHistory/>}/>
          <Route path="/CarStatus" element={<CarStatus/>}/>
        </Routes>
      </div>
    </div>
  );
};

const AppWithRouter = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default AppWithRouter;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Login from "./components/Login";
// import Main from "./components/Main";
// import SignUp from "./components/SignUp";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";

// const App = () => {
//   const location = useLocation();
//   const hideSidebarRoutes = ["/", "/signup"];

//   return (
//     <Router>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/main" element={<Main />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//         </Routes>
//       </Sidebar>
//     </Router>
    
//   );
// };

// export default App;
