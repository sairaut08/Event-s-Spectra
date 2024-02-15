import './App.css'

import { Route, Routes } from 'react-router-dom'

import ClubList from './pages/clubs/ClubList'
//import RequireAuth from './components/Auth/RequireAuth'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/clubs' element={<ClubList />} />

      {/* <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
         </Route>*/}

  

      
    </Routes>
  )
}

export default App
