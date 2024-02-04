
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import './bootstrap.min.css'
import Footer from './Components/Footer'
import Authentication from './Pages/Authentication'
import AllBlogs from './Pages/AllBlogs'
import MyBlogs from './Pages/MyBlogs'
import Account from './Pages/Account'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Authentication></Authentication>}></Route>
        <Route path='/register' element={<Authentication insideRegister></Authentication>}></Route>
        <Route path='/allblogs' element={<AllBlogs></AllBlogs>}></Route>
        <Route path='/myblogs' element={<MyBlogs></MyBlogs>}></Route>
        <Route path='/profile' element={<Account></Account>}></Route>
        <Route path='/aprofile' element={<Profile></Profile>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
