import React,{createContext,useContext,useEffect,useState} from 'react'

const themeContext=createContext()

function ThemeProvider({children}) {
  const [theme,setTheme]=useState(localStorage.getItem('theme') || 'light')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem('theme',theme)
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

  return <button className='text-2xl' onClick={toggle}>{theme==='light'?'☀️':'🌙'}</button>
}

export {ThemeProvider,Switcher}