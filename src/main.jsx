import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import AddPost from "./pages/AddPost";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";
import Post from './pages/Post';
import MyPost from './pages/MyPost'
import Fullscrn from "./pages/Fullscrn";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route exact path="" element={<Home/>}/>
      <Route path="addpost" element={<AddPost/>}/>
      <Route path="editpost/:slug" element={<EditPost/>}/>
      <Route path="mypost" element={<MyPost/>}/>
      <Route path="post/:slug" element={<Post/>}/>
      <Route path="fullscrn/:fileId" element={<Fullscrn/>}/>
      <Route path="login" element={<LogIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <NextUIProvider className="w-full h-full">
        <RouterProvider router={router}/>
      </NextUIProvider>
  </Provider>
);
