import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Layout = ({children}) => {
  return (
   <React.Fragment>
        <Navbar />
        <div className="columns mt-6" style={{minHeight: "100vh"}}>
            <div className="mt-5 mr-6 ml-6">
                <Sidebar />
            </div>
            <div className="column has-background-light">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  );
};

export default Layout;