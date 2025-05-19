import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Homepage from './Components/Homepage'
import Home from './Components/Home'
import Add from './Components/Add'
import Edit from './Components/Edit'
import Login from './Components/Login'
import Signin from './Components/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './Components/Context';


function App() {


  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signin' element={<Signin />}/>
          
          <Route path='/' element={<Homepage />}>
            <Route index element={<Home />}></Route>
            <Route path='/addblog' element={<Add />}></Route>
            <Route path='/editblog/:id' element={<Edit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
