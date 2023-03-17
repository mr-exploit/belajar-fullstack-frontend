import React from "react";
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <aside className="menu">
          <p className="menu-label">
            General
          </p>
          <ul className="menu-list">
            <li>
            
              <NavLink to="/dashboard">
                Dashboard
              </NavLink>
            
            </li>
          </ul>
          <p className="menu-label">
            Belajar
          </p>
          <ul className="menu-list">
            <li><NavLink to="/books">
                book
              </NavLink></li>
          
          </ul>
          {user && user.role === "admin" && (
            <div>
              <p className="menu-label">
              Admin
              </p>
            
              <ul className="menu-list">
                <li>
                
                  <NavLink to="/users">
                    users
                  </NavLink>
                
              </li>
              </ul>
            </div>
          )}

    </aside>
      
    </div>
  );
};

export default Sidebar;