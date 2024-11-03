import { Fetcher } from "../fetcher.js"
import { Post } from "./post.js"

export const PostDetail = async ({ id }) => {

    const response = await Fetcher({
        url: `/posts/${id}`,
        method: 'GET'
    })

    console.log(response.comments)

    const comments = response.comments.map((comment) => `<li>${comment.message}</li>`)

    const component = document.createElement('component')

    component.innerHTML = `

        <section class="list-post">
            ${await Post(response.post)}

            <ul class="comments">
                ${comments}
            </ul>
        </section>
    `

    return component
}