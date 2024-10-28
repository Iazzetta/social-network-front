import { Fetcher } from "../fetcher.js"

export const Register = async () => {

    const component = document.createElement('component')

    component.innerHTML = `
        <section class="authentication card">
            <h1 class="center">Social Network</h1>
            <form>
                <input type="text" name="name" placeholder="Nome" autofocus />
                <input type="email" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="******" />

                <button type="submit">Confirmar</button>
                <links to="/login">Ou entrar na conta</links>
            </form>
        </section>
    `

    component.querySelector('form').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.target).entries());

        const response = await Fetcher({
            url: '/users/register',
            method: 'POST',
            data: data
        })

        localStorage.setItem('__token', response.token)

    })

    return component;
}