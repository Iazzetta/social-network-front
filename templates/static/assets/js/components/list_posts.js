import { Fetcher } from "../fetcher.js"
import { AddPost } from "./add-post.js"
import { Post } from "./post.js"

export const ListPosts = async () => {

    const response = await Fetcher({
        url: '/posts/all-posts',
        method: 'GET'
    })

    const listPostPromises = response.posts.map( async (post) => await Post(post) )
    const listPosts = await Promise.all(listPostPromises)

    const component = document.createElement('component')

    component.innerHTML = `

        <section class="list-post">${
            listPosts.join('')
        }</section>
    `

    component.insertAdjacentElement('afterbegin', await AddPost())

    return component
}