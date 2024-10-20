import { ListPosts } from "./components/list_posts.js"



( async () => {
    const root = document.querySelector('#root')
    root.innerHTML = await ListPosts()
})()