import React, { useContext } from 'react'
import context from './Context'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Blog({ item }) {
  const { user, remove } = useContext(context)

  return (
    <div className="card m-4 col-lg-3">
      <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
      <div className="card-body">
        <div className="small text-muted">Posted: {item.createdAt}</div>
        <div className="small text-muted">{item.author.name}</div>
        <h2 className="card-title h4">{item.title}</h2>
        <p className="card-text">{item.content}</p>
        {
          item.userId == user._id ? <div> <Link to={`/editblog/${item._id}`} className='btn btn-primary'>Edit</Link> <button className='btn btn-danger' onClick={()=>remove(item._id)}>Delete</button></div> : <></>
        }
        {
          item.updatedAt ? <div className="small text-muted">Lastest :{item.updatedAt}</div> : <></>
        }
      </div>
    </div>
  )
}

export default Blog