<script>
    import {goto} from "$app/navigation";

    let username = "";
    let password = "";

    let loading = false;

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            login();
        }
    }

    async function login() {
        loading = true;
        const response = await fetch(
            "https://locker-api.cvapps.net/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: password,
                    username: username,
                }),
                credentials: "include",
            },
        );

        if (response.ok) {
            await goto("/admin");
        } else {
            let jsons = await response.json();
            alert(jsons.message);
            loading = false;
        }
    }
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<style>
    .main {
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
        position: absolute;
    }

    .top {
        position: absolute;
        left: 30px;
        top: 20px;

        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: row;
        gap: 15px;
    }

    .logo {
        height: 70px;
        cursor: pointer;
        user-select: none;
    }

    a {
        display: inherit;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }

    a:link {
        text-decoration: none;
        user-select: none;
    }

    a:visited {
        text-decoration: none;
        user-select: none;
    }

    a:hover {
        text-decoration: none;
        user-select: none;
    }

    a:active {
        text-decoration: none;
        user-select: none;
    }

    .top-text {
        font-size: 18px;
        color: var(--text);
    }

    .login {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        align-items: center;
        justify-content: center;
        row-gap: 30px;
    }

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
        background-color: #0082ff;
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

    @media only screen and (max-width: 600px) {
        .logo {
            height: 35px;
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

        .login-form {
            width: 90vw;
        }

        .top-text {
            font-size: 15px;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
        }
    }
</style>

<div class="main">
    <div class="top">
        <a href="/"><img alt="CVHS logo" class="logo" src="/assets/CVHS-logo.png"/></a>
        <div class="top-text">CVHS Community Service</div>
    </div>

    <div class="login">
        <div class="login-cont">
            <div class="login-header">Student Registration</div>

            <div class="login-form" on:keydown={handleKeyPress}>

                <label for="username">First Name</label>
                <input
                        bind:value={username}
                        id="username"
                        name="username"
                        required
                        type="text"
                />

                <label for="username">Last Name</label>
                <input
                        bind:value={username}
                        id="username"
                        name="username"
                        required
                        type="text"
                />

                <label for="username">6 Digit ID</label>
                <input
                        bind:value={username}
                        id="username"
                        name="username"
                        required
                        type="text"
                />

                <label for="username">Grade</label>
                <input
                        bind:value={username}
                        id="username"
                        name="username"
                        required
                        type="text"
                />

                <label for="username">Email</label>
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

                <button class="submit" on:click={login}>Sign in</button>
            </div>
        </div>

        <!--        <div class="loading-cont">-->
        <!--            {#if loading}-->
        <!--                <Stretch size="60" color="#577db2" unit="px" duration="1s"/>-->
        <!--            {/if}-->
        <!--        </div>-->

        <div class="bottom-text">
            <div class="reg">Already A Member?</div>
            <a href="/login">
                <div class="regs">Login</div>
            </a>
        </div>
    </div>
</div>