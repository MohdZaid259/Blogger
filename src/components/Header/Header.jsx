import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogOut } from "../index";
import { ThemeProvider,Switcher } from '../../context/theme'
import logo from '../../Media/logo.jpeg'
import close from '../../Media/close.png'
import menu from '../../Media/menu.png'

export default function Header() {
  const authStatus=useSelector(state=>state.auth.status)
  const headerstyle = {
    boxShadow: '0 5px 8px rgba(0, 0, 0, 0.4)',
  };
  const [ham, setHam] = useState(false);
  const handleHam = () => setHam(!ham); 

  const navItems=[
    {
      name:'Home',
      slug:'/',
      status:true
    },
    {
      name: "Login",
      slug: "/login",
      status: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      status: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/mypost",
      status: authStatus,
    },
    {
      name: "Add Post",
      slug: "/addpost",
      status: authStatus,
    },
  ]

  return (
      <Navbar className="bg-teal-400 dark:bg-gray-900 tracking-wider font-bold font-footer" style={headerstyle}>
        <NavbarBrand>
          <Link to='/'><img className="cursor-pointer w-7 mr-2 rounded-sm " src={logo} alt="" /></Link>
          <Link to='/'><span className="cursor-pointer font-bold tracking-widest text-inherit">Blogger</span></Link>
        </NavbarBrand>
          <NavbarContent justify="center">
            <div onClick={handleHam} className="sm:hidden">
              {ham ? (
                <img className="dark:invert w-4 rounded-sm " src={close} alt="close" />
              ) : (
                <img className="dark:invert w-7 rounded-sm " src={menu} alt="menu" />
              )}
            </div>
            <ul onClick={handleHam}
              className={`bg-teal-100 sm:text-base dark:text-black sm:dark:text-white sm:bg-transparent w-auto rounded-lg sm:rounded-none py-5 px-6 sm:p-0 absolute sm:static top-16 right-4 ${
                ham
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 sm:opacity-100 -translate-y-[140%] sm:translate-y-0"
              } flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-6 sm:text-lg transition-all duration-150 ease-in-out`}
            >
            {navItems.map((item)=>item.status?(
              <NavLink key={item.slug} className={({isActive})=>`${isActive?'text-blue-500':''} hover:underline underline-offset-4`} to={item.slug}>{item.name}</NavLink>
            ):null)}
            {authStatus && <LogOut/>}
            </ul>
          </NavbarContent>
        <ThemeProvider><Switcher/></ThemeProvider>
      </Navbar>
  )
} 
