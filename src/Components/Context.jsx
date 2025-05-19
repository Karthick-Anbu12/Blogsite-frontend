import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const context = createContext()
export const UserProvider = ({ children }) => {
  const [isloggedin, setloggedin] = useState(true)
  const [blog, setblog] = useState([])
  const [user, setuser] = useState([])
  const getdata = async () => {
    const res = await axios.get("https://blogsite-backend-a5c2.onrender.com/blogs", { headers: { Authorization: window.localStorage.getItem("mytoken") } })
    setblog(res.data)
  }
  const getuser = async () => {
    const res = await axios.get("https://blogsite-backend-a5c2.onrender.com/auth/user", { headers: { Authorization: window.localStorage.getItem("mytoken") } })
    setuser(res.data)
  }
  const remove=async(id)=> {
    try {
      const res=await axios.delete(`https://blogsite-backend-a5c2.onrender.com/blogs/${id}`, { headers: { Authorization: window.localStorage.getItem("mytoken") } })
    if(res.status==204)  {
      alert("Blog Deleted")
        getdata()
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getdata()
    getuser()
  }, [])
  return <context.Provider value={{ isloggedin, setloggedin, getdata, blog, setuser, user ,remove}}>
    {children}
  </context.Provider>
}

export default context