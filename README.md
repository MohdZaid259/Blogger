# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- WorkFlow :-
Made .env and extracted urls from appwrite
Created a .env.sample for future Reference
Stringyfied in conf file for fool-proof working
Created basic utility components & pages
Wrote appwrite Services in appwrite folder

- Problems faced :-
placed .env in src (silly)
used nextui for components which block tailwind styling
went to shadcn but there was too limited styles
went back to nextui fixing the issue by tailwind.config content section
it's <Outlet/> not {Outlet}

- Doubts :-
why .env.sample
why file upload when we've post upload
use of htmlFor ??
<form onSubmit={()=>handleSubmit(submit)}> why not like this
sender compo or receiver compo dono me destructure krna hota h ki sirf ek me?
input compo have forward-ref but useRef is used nowhere
post.$id === slug (where?)
content html-Id issue
throw and console.log

- Changes :-
external component library
no instant login on signup
slug passing in appwrite
new approach in header file

- Todo :-
optimise the header file
make the image not required in appwrite
store for posts
useEffect isn't good for post.jsx
click postimage to see in full screen