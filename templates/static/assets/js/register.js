import { Register } from "./components/register.js"



( async () => {
    const root = document.querySelector('#root')
    root.appendChild( await Register() )
})()