import { Links } from "./links.js"
import { Router } from "./router.js"



( async () => {
    const root = document.querySelector('#root')
    await Router(root, window.location.pathname)
})()