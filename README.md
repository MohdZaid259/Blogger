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
it's <Outlet/> not {Outlet}

- Doubts :-
why .env.sample
input compo have forward-ref but useRef is used nowhere
post.$id === slug (where?)
content html-Id issue
throw and console.log

- Changes :-
new approach in header file

- Todo :-
optimise the header file
store for posts

- Bugs :-
theme changing on login