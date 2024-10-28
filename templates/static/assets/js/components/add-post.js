import { Fetcher } from "../fetcher.js"
import { Post } from './post.js'

export const AddPost = async () => {

    const component = document.createElement('component')

    component.innerHTML = `
        <section class="card">
            <form>
                <textarea name="message" placeholder="O que você esta pensando?" required></textarea>

                <div class="right">
                    <button type="submit" class="btn-create-post">Postar</button>
                </div>
            </form>
        </section>
    `

    component.querySelector('form').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.target).entries());

        const response = await Fetcher({
            url: '/posts/create',
            method: 'POST',
            data: data
        })

        document.querySelector('.list-post').insertAdjacentHTML('afterbegin', await Post(response.post))

        ev.target.reset();


    })

    return component;
}