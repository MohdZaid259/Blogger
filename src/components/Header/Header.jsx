import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, link} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const authStatus=useSelector(state=>state.auth.status)
  const navigate=useNavigate()

  if(authStatus){
    return (
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Custom Blog</p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>
            <NavLink to='/' className={({isActive})=>isActive?'text-blue-500':''}>Home</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/addpost' className={({isActive})=>isActive?'text-blue-500':''}>Add Post</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to='/allpost' className={({isActive})=>isActive?'text-blue-500':''}>All Post</NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <Button color="primary" variant="ghost">
              Logout
            </Button>
        </NavbarContent>
      </Navbar>
    );
  } else {
    return (
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Custom Blog</p>
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
