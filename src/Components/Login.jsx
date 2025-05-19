import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import context from './Context'
import { useFormik } from 'formik'

function Login() {
  const { setloggedin, setuser } = useContext(context)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post("https://blogsite-backend-a5c2.onrender.com/auth/login", values)
        if (res.status == 200) {
          window.localStorage.setItem("mytoken", res.data.message)
          navigate('/')
          setloggedin(true)
          setuser(res.data.user)
          alert("Logged in Successfully")
        }
        else{
          alert("Invalid Credentials")
        }
      } catch (error) {

      }

    }
  })
  return (

    <div className='container  d-flex justify-content-center align-item-center' >
      <div className='p-5'>
        <h2 className=''>LogIn</h2>
        <form style={{ width: "250px" }} onSubmit={formik.handleSubmit} >
          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' onChange={formik.handleChange} value={formik.values.email} />

          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={formik.handleChange} value={formik.values.password} />
          </div>
          <div className='my-2'>
            <Link to='/signin ' className='fs-6 text-primary'>Register new user</Link>
          </div>
          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-primary ">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login