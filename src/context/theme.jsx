import React,{createContext,useContext,useEffect,useState} from 'react'
import brightness from '../Media/brightness.png'

const themeContext=createContext()

function ThemeProvider({children}) {
  const [theme,setTheme]=useState('light')

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  },[theme])

  function toggle(){
    setTheme((prev)=>(prev==='light'?'dark':'light'))
  }
  return (
    <themeContext.Provider value={{theme,toggle}}>{children}</themeContext.Provider>
  )
}

function Switcher(){
  const {theme,toggle}=useContext(themeContext)

  return (
    <button className='text-2xl ml-3' onClick={toggle}>
      {theme==='light'?<img className='w-7 ' src={brightness}/>:<img className='w-7 invert' src={brightness}/>}
    </button>
  )
  
}

export {ThemeProvider,Switcher}