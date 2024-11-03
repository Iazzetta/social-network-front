import { AddPost } from "./components/add-post.js";
import { ListPosts } from "./components/list_posts.js"
import { Login } from "./components/login.js";
import { PostDetail } from "./components/post_detail.js";
import { Register } from "./components/register.js";
import { Links } from "./links.js";

const Routes = [
    { path: '', component: ListPosts },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/add-post', component: AddPost },
    { path: '/posts/:id', component: PostDetail },
]

const componentBuilder = async(route, path, component) => {
    const params = {};

    if (path.endsWith('/')) {
        path = path.replace(/\/$/, '');
    }

    const routeSegments = route.split('/').slice(1)
    const pathSegments = path.split('/').slice(1)

    if (routeSegments.length != pathSegments.length)
        return false;

    const match = routeSegments.every((segment, i) => {
        return segment === pathSegments[i] || segment.startsWith(':');
    });

    if (match) {
        routeSegments.forEach((segment, i) => {
          if (segment[0] === ':') {
            const propName = segment.slice(1);
            params[propName] = decodeURIComponent(pathSegments[i]);
          }
        });

        console.log(match, routeSegments, pathSegments, params)

        if (params) {
            return await component(params)
        }

        return await component()
    }

    return false
}

export const Router = async (root, path = '/') => {

    Routes.forEach(async (route) => {
        const rendered = await componentBuilder(route.path, path, route.component)
        if (rendered) {
            root.replaceChildren( rendered )
            await Links(root)
            return rendered
        }

        return root.replaceChildren('404 not found')
    })

}