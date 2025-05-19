import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import context from './Context'

function Edit() {
  const navigate = useNavigate()
  const params = useParams()
  const { getdata } = useContext(context)
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "", // e.g., "Career", "Finance", "Travel"
      author: "", // populated from user data
      content: "",
      image: "", // optional URL
      userId: "", // references User
      createdAt: "",
      updatedAt: ""
    },
    onSubmit: async (values) => {
      await axios.put(`https://blogsite-backend-a5c2.onrender.com/blogs/${params.id}`, values, { headers: { Authorization: window.localStorage.getItem("mytoken") } })
      navigate('/')
      getdata()
      alert("Blog updated successfully")
    }
  })
  const getvalue = async () => {
    const res = await axios.get(`https://blogsite-backend-a5c2.onrender.com/blogs/${params.id}`, { headers: { Authorization: window.localStorage.getItem("mytoken") } })
    formik.setValues(res.data)
  }
  useEffect(() => {
    getvalue()
  }, [])
  return (
    <div className='container d-flex justify-content-center' >
      <div className=' '>
        <h2 className='my-4'>Write your Blog</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="title">Title</label>
              <input type="text" className="form-control" name='title' placeholder="Title" onChange={formik.handleChange} value={formik.values.title} />
            </div>
            <div className="form-group col-md-6">
              <label for="Category">Category</label>
              <input type="text" className="form-control" id="Category" name="category" placeholder="Category" onChange={formik.handleChange} value={formik.values.category} />
            </div>
          </div>

          <div className="form-group">
            <label for="content">Content</label>
            <textarea type="text" className="form-control" id="content" placeholder="Fill your content" name='content' onChange={formik.handleChange} value={formik.values.content} />
          </div>

          <div className="form-row mb-2">
            <div className="form-group col-md-6">
              <label for="image">URL</label>
              <input type="text" className="form-control" id="inputCity" name='image' onChange={formik.handleChange} value={formik.values.image} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Edit