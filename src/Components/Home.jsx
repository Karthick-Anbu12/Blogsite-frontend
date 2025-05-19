import React, { useContext, useEffect } from 'react'
import Blog from './Blog'
import axios from 'axios'
import context from './Context'

function Home() {
const {getdata,blog}=useContext(context)
  useEffect(()=>{
    getdata ()
  }, [])

  return (
    <div className='container  mt-4'>
      <div className=' row d-flex flex-wrap'>
        {
          blog.map((item)=>{
            return <Blog item={item}/>
          })
        }
      </div>
    </div>
  )
}

export default Home