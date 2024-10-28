import { Router } from "./router.js";

const changeRouterPath = (path) => {

    window.history.pushState({path: '/'}, '1', '/')
    window.history.pushState({path: path}, '2', path)

}

export const Links = async (root) => {

    root.querySelectorAll('links').forEach( async (el) => {

        el.addEventListener('pointerdown', async (ev) => {

            ev.preventDefault();
            const path = el.getAttribute('to');

            const rendered = await Router(root, path)

            changeRouterPath(path)
        })

    })

    // back page
    window.addEventListener("popstate", async (e) => {
        if(e.state){
            const rendered = await Router(root, e.state.path)
            changeRouterPath(e.state.path)
        }
    });
}