import { Fetcher } from "../fetcher.js"

export const MiniPostUser = async (post) => {

    const user = await Fetcher({
        url: `/users/get-mini-user/${post.user_id}`,
        method: 'GET'
    })

    return `
        <a class="mini-user" href="#">
            <div class="avatar">
                <img src="/static/assets/images/default_avatar.webp" width="35px" />
            </div>
            <div class="info">
                <div>${user.name}</div>
                <div class="time">${new Date(post.created_at).toLocaleString()}</div>
            </div>
        </a>
    `
}