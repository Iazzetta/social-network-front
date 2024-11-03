import { CachedFetcher } from "../fetcher.js"

export const MiniPostUser = async (post) => {

    const user = await CachedFetcher({
        url: `/users/get-mini-user/${post.user_id}`,
        method: 'GET',
        cache: {key: 'mini-user', id: post.user_id}
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