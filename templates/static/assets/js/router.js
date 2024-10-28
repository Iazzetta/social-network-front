import { AddPost } from "./components/add-post.js";
import { ListPosts } from "./components/list_posts.js"
import { Login } from "./components/login.js";
import { Register } from "./components/register.js";
import { Links } from "./links.js";

export const Router = async (root, path = '/') => {

    
    let selectedComponent = ListPosts;

    if (path == '/login') selectedComponent = Login
    else if (path == '/register') selectedComponent = Register
    else if (path == '/add-post') selectedComponent = AddPost

    const renderedComponent = await selectedComponent()
    root.replaceChildren( renderedComponent )

    await Links(root)

    return renderedComponent
}