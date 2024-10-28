import { AddPost } from "./components/add-post.js"



( async () => {
    const root = document.querySelector('#root')
    root.appendChild( await AddPost() )
})()