import { MiniPostUser } from "./mini_post_user.js"

export const Post = async (post) => {
    
    return `
        <div class="post card">

            <div class="header mb">
                ${await MiniPostUser(post)}

                <div class="options">MENU</div>
            </div>

            <div class="content mb rounded">${post.message}</div>

            <div class="actions">
                <div class="action">Curtir</div>
                <div class="action">Comentar</div>
                <div class="action">Compartilhar</div>
            </div>

        </div>
    `
}