import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { PostForm } from './components/index'

function App() {

  return (
    <>
    {/* <Header/> */}
    <PostForm/>
    {/* <Outlet/>
    <Footer/> */}
    </>
  )
}

export default App