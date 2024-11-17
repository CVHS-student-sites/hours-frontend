<script>
    import {loginStudent} from "$lib/api/global.js";
    import {goto} from "$app/navigation";

    let username = $state("");
    let password = $state("");
    let remember = $state(false);


    function handleKeyPress(event) {
        if (event.key === "Enter") {
            login();
        }
    }

    async function login() {

        let data = {
            studentID: username,
            password: password,
            rememberMe: remember,
        };

        loginStudent(data)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                goto('/dashboard');
            })
            .catch((error) => {
                const message = error.response?.data?.message || 'An unknown error occurred';
                alert(message);
            });
    }
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<style>


    .login-cont {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        padding: 32px;
        /*background-color: #1b2c42;*/
    }

    .login-header {
        font-size: 24px;
        color: var(--text);
        margin-bottom: 12px;
    }

    .login-form {
        display: flex;
        justify-content: center;

        width: 352px;
        flex-direction: column;
        /*align-items: center;*/
        row-gap: 10px;
    }

    label {
        color: var(--text);
        line-height: 20px;
    }

    a {
        text-decoration: none;
    }

    .forgot {
        color: #4ca6ff;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 0px 8px 0px 8px;
        box-sizing: border-box;
        height: 35px;
        line-height: 35px;
        color: var(--text);
        border: 2px solid #005cb3;
        /* border: none; */
        background-color: var(--background);

        border-radius: 4px;
        transition-duration: 50ms;
        font-size: 14px;
    }

    input:focus {
        outline: none;
        border-color: #577db2;
        /*background-color: #eaeaea;*/
    }

    input:hover {
        border-color: #577db2;
        /*background-color: #eaeaea;*/
    }

    .submit {
        width: 100%;
        height: 35px;
        background-color: var(--primary);
        border: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
        cursor: pointer;
        transition-duration: 150ms;
        color: var(--text);
    }

    .submit:hover {
        background-color: #577db2;
    }

    .loading-cont {
        height: 60px;
        padding-top: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bottom-text {
        width: 100%;
        display: flex;
        /*align-items: center;*/
        justify-content: center;
        column-gap: 5px;
    }

    .reg {
        color: var(--text);
    }

    .regs {
        color: #0a66c2;
        cursor: pointer;
    }

    .tos {
        display: flex;
        column-gap: 5px;
    }

    .tos-text {
        color: var(--text);
        font-size: 14px;
    }

    @media only screen and (max-width: 600px) {
        .main {
            /* background: rgb(2, 0, 36); */
            /* background: linear-gradient(14deg, rgb(9, 3, 121) 0%, rgb(33, 97, 239) 100%); */
        }

        .logo {
            height: 35px;
            /*left: 20px;*/
        }

        .login {
            row-gap: 30px;
        }

        .login-cont {
            width: 100vw;
            box-shadow: none;
            padding: 0;
            background: unset;
        }

        .top-text {
            font-size: 15px;
        }

        .login-form {
            width: 90vw;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
        }
    }
</style>
<div class="login-cont">
    <div class="login-header">Student Login</div>

    <div class="login-form" onkeydown={handleKeyPress}>
        <label for="username">Stduent ID</label>
        <input
                bind:value={username}
                id="username"
                name="username"
                required
                type="text"
        />

        <label for="password">Password</label>
        <input
                bind:value={password}
                id="password"
                name="password"
                required
                type="password"
        />

        <div class="tos">
            <input id="agreedtos" name="tos" type="checkbox" value="Boat" bind:checked={remember}>
            <div class="tos-text">Remeber Me</div>
        </div>

        <button class="submit" onclick={login}>Sign in</button>
    </div>
</div>

<!--        <div class="loading-cont">-->
<!--            {#if loading}-->
<!--                <Stretch size="60" color="#577db2" unit="px" duration="1s"/>-->
<!--            {/if}-->
<!--        </div>-->

<div class="bottom-text">
    <div class="reg">Need an account?</div>
    <a href="/register">
        <div class="regs">Register</div>
    </a>
</div>