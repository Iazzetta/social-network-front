import { Login } from "./components/login.js"



( async () => {
    const root = document.querySelector('#root')
    root.appendChild( await Login() )
})()