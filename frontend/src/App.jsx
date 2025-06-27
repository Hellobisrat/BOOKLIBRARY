import {Routes,Route} from 'react-router'

import HomePage from './pages/HomePage.jsx'; 
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import SignUp from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';
import {Toaster} from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
      <Toaster/>
      <ToastContainer/>
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
