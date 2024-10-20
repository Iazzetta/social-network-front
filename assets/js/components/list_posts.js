import { Fetcher } from "../fetcher.js"
import { Post } from "./post.js"

export const ListPosts = async () => {

    const response = await Fetcher({
        url: '/posts/all-posts',
        method: 'GET'
    })

    const listPostPromises = response.posts.map( async (post) => await Post(post) )
    const listPosts = await Promise.all(listPostPromises)

    return `
        <section class="list-post">${
            listPosts.join('')
        }</section>
    `
}