import {Routes,Route} from 'react-router'

import HomePage from './pages/HomePage.jsx'; 
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import SignUp from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        
       <Route path='/' element={<HomePage/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/login' element={<LogIn />}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App
