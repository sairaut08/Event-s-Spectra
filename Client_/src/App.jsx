import {  Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUSPage'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import ProfilePage from './Pages/ProfilePage'
import ClubList from './Pages/Clubs/ClubList'
import AccessDenied from './Pages/AccessDenied'
import ClubDescription from './Pages/Clubs/ClubDescription'

function App() {
  

  return (

    // routes 
    <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/about-us' element={ <AboutUsPage/> } />
        <Route path='/contact-us' element={ <ContactUsPage/> } />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/login' element={ <Signin/> } />
        <Route path='/user/profile' element={ <ProfilePage/> } />
        <Route path='/clubs' element={ <ClubList/> } />
        <Route path='/club/description' element={ <ClubDescription/> } />
        <Route path='/denied' element={ <AccessDenied/> } />


        <Route path='*' element={<NotFound/> } />
    </Routes>
  
  )
}

export default App
