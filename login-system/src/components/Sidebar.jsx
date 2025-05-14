import React, { useState } from 'react';
import "./Sidebar.css"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import {
    FaPhone,
    FaBars,
    FaHistory,
    FaRupeeSign,
    FaCar,
    FaVideo,
    FaDatabase
}from "react-icons/fa";
import { MdOutlinePayment, MdOutlineLogout } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {

    const location = useLocation();
    const username = location.state?.username || "User";

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelLogout = () => {
        dispatch(logout());
        navigate("/");
      };
    

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",state: { username },
            name:"Dashboard",
            icon:<FaDatabase/>
        },
        {
            path:"/Payment",state: { username },
            name:"Cameras",
            icon:<FaVideo/>
        
        },
        {
            path:"/Home", state: { username },
            name:"Vehicles",
            icon:<FaCar/>
            
        },
        {
            path:"/Fine",state: { username },
            name:"Challan",
            icon:<FaRupeeSign/>
        },
        {
            path:"/History",state: { username },
            name:"History",
            icon:<FaHistory/>
        },
      
    ]
    return (
        <div className="Sidebar_Container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                <NavLink to="/Profile" style={{ textDecoration: 'none'}}>
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{username}</h1>
                   {/* <div style={{display: isOpen ? "block" : "none" }||{marginLeft : isOpen? "100px":"none"}} className='LogOut'>
                        <MdOutlineLogout onClick={handelLogout}/>
                   </div> */}
                </NavLink>
                   <div style={{marginLeft: isOpen ? "120px" : "0px"}} className={`bars ${isOpen ? "rotate" : ""}`}onClick={toggle}>
                       <FaBars />
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className="logout_section">
                    <button className={`logout-btn ${isOpen ? "expanded" : ""}`} onClick={handelLogout}>
                        <MdOutlineLogout className="logout_icon" />
                        {isOpen && <span>LogOut</span> }
                    </button>
                </div>
           </div>
           <main style={{ marginLeft: isOpen ? "250px" : "50px" }}>
            {children}
            </main>
        </div>
    );
};

export default Sidebar;