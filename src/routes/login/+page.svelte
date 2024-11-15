<script>
    import Students from "./views/Students.svelte";
    import Privileged from "./views/Privileged.svelte";

    let selectedView;

    function loginPage(page) {
        if (page === 0) {
            selectedView = Students;
        } else if (page === 1) {
            selectedView = Privileged;
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

    .login-button-cont {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .button-text {
        color: var(--text);
        font-size: 24px;
        font-weight: bold;
    }

    .login-selection-cont {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-direction: column;
    }

    .login-select {
        color: var(--text);
        font-size: 16px;
        font-weight: bold;
        border-radius: .5rem;
        align-self: center;
        padding: 16px;
        transition: all .2s;

        background-image: linear-gradient(225deg, #0084ff, #743fde);
        outline: none;
        border: none;
    }

    .login-select:hover {
        cursor: pointer;
        transform: scale(1.06);
        transform-origin: center;
    }

    @media only screen and (max-width: 600px) {
        .logo {
            height: 35px;
            /*left: 20px;*/
        }

        .login {
            row-gap: 30px;
        }

        .top-text{
            font-size: 15px;
        }

    }

</style>

<div class="main">
    <div class="top">
        <a href="/"><img alt="IMS logo" class="logo" src="/assets/CVHS-logo.png"/></a>
        <div class="top-text">CVHS Community Service</div>
    </div>

    <div class="login">
        <svelte:component this={selectedView}/>

        {#if !selectedView}
            <div class="login-selection-cont">
<!--                <div class="button-text">Please select login</div>-->
                <div class="login-button-cont">
                    <button class="login-select" on:click={() => loginPage(0)}>Student Login</button>
                    <button class="login-select" on:click={() => loginPage(1)}>Admin Login</button>
                </div>
            </div>
        {/if}

    </div>
</div>