import { Fetcher } from "../fetcher.js"

export const Login = async () => {

    const component = document.createElement('component')

    component.innerHTML = `
        <section class="authentication card">
            <h1 class="center">Social Network</h1>
            <form>
                <input type="email" name="email" placeholder="E-mail" autofocus />
                <input type="password" name="password" placeholder="******" />

                <button type="submit">Entrar</button>
                <links to="/register">Ou criar uma conta</links>
            </form>
        </section>
    `

    component.querySelector('form').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.target).entries());

        const response = await Fetcher({
            url: '/users/login',
            method: 'POST',
            data: data
        })

        localStorage.setItem('__token', response.token)

        window.location.href = '/'
    })

    return component;
}