import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

function Signin() {
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    onSubmit:async(values)=>{
      try {
       const res= axios.post("https://blogsite-backend-a5c2.onrender.com/auth/signup",values)
       if(res.status==201){
        alert('Register Succesfully')
       }

      } catch (error) {
        
      }
    }
  })
  return (
  
    <div className='container  d-flex justify-content-center align-item-center' >
      <div className='p-5'>
      <h2 className=''>SignIn</h2>
      <form style={{ width: "250px" }} onSubmit={formik.handleSubmit} >
         <div className="mb-3">
        <label for="name" className="form-label">Name</label>
        <input type="text" className="form-control" name='name' value={formik.values.name} onChange={formik.handleChange}  />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' value={formik.values.email} onChange={formik.handleChange}  />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" value={formik.values.password} onChange={formik.handleChange} />
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Signin