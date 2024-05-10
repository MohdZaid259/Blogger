import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import conf from './conf/conf'

function App() {

  return (
    <>
    <Header/>
    {Outlet}
    <Footer/>
    </>
  )
}

export default App