
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import context from './Context';

function Logout() {
  const {isloggedin,setloggedin}=useContext(context)
  let navigate = useNavigate();
  let logout = () => {
    window.localStorage.removeItem("mytoken");
    setloggedin(false);
    navigate("/login");

  };
  useEffect(() => {
    let token = window.localStorage.getItem("mytoken");
    if (token) {
      setloggedin(true);
    }else{
        setloggedin(false)
    }
  }, []);
    return (
      <div>
        {isloggedin && (
          <button className="btn btn-danger ms-2" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    );
  }

export default Logout