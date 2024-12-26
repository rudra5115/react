
import About from './components/about'
import Contect from './components/Contect'
import Footer from './components/footer'
import Header from './components/Header'
import Project from './components/Project'
import Testimonails from './components/Testimonails'
import './index.css'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='w-fill overflow-hidden'>
     <ToastContainer/>
     <Header/>
     <About/>
     <Project/>
     <Testimonails/>
     <Contect/>
     <Footer/>
    </div>
  )
}

export default App
