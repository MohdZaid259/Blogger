import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../index";
import logo from '../../Media/logo.jpeg'

export default function Header() {
  const authStatus=useSelector(state=>state.auth.status)
  const navigate=useNavigate()

  if(authStatus){
    return (
      <Navbar className="bg-green-200 tracking-wider font-bold font-footer">
        <NavbarBrand>
          <img className="w-7 mr-2 rounded-sm " src={logo} alt="" />
          <p className="font-bold tracking-widest text-inherit">Blogger</p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>
            <NavLink to='/' className={({isActive})=>isActive?'text-blue-500':''}>Home</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/mypost' className={({isActive})=>isActive?'text-blue-500':''}>My Posts</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/addpost' className={({isActive})=>isActive?'text-blue-500':''}>Add Post</NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
        <LogOut/>
        </NavbarContent>
      </Navbar>
    );
  } else {
    return (
      <Navbar>
        <NavbarBrand>
          <img className="w-7 mr-2 rounded-sm" src={logo} alt="" />
          <p className="font-bold text-inherit">Blogger</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <NavLink to='/' className={({isActive})=>isActive?'text-blue-500':''}>Home</NavLink>
          </NavbarItem>
          <NavbarItem className="lg:flex"><NavLink to='/login' className={({isActive})=>isActive?'text-blue-500':''}>Login</NavLink></NavbarItem>
          <NavbarItem>
            <Button onClick={()=>navigate('/signup')} color="primary" variant="ghost">
              SignUp
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    )
  }
}
