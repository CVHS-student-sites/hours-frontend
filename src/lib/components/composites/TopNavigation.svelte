<script>
    import Boop from "$lib/components/app/Boop.svelte";
    import ProfileIcon from "$lib/components/global/base/ProfileIcon.svelte";

    import {blur} from 'svelte/transition';

    export let data;
    const { response } = data;
</script>

<style>
    .logo-cont a {
        display: inherit;
        width: 50px;
        height: 50px;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    a:active {
        text-decoration: none;
    }

    .icon-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
    }

    /* .icon-stack:hover{
        background-color: #101014;
        border-radius: 6px;
    } */

    .stack-text {
        /* font-family: Mo; */
        font-size: 14px;
        color: var(--text);
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        color: var(--text);
        user-select: none;
        cursor: pointer;
        width: 24px;

    }

    .icon-cont {
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 35px;
    }

    .logo-cont {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    .top-navigation-container {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .nav-padding {
        width: 100%;
        padding-right: 40px;
        padding-left: 40px;
    }

    .top-navigation {
        display: flex;
        align-items: center;
        height: 100%;
        max-width: 1300px;
        margin-right: auto;
        margin-left: auto;
        justify-content: space-between;
    }

    .navigation-links {
        display: flex;
    }

    .nav-link {
        color: var(--text);
        font-size: 16px;
        border-radius: .5rem;
        align-self: center;
        padding: 16px;
        transition: all .2s;
    }

    .profile-link {
        transition: all .2s;
    }

    .profile-link:hover {
        transform: scale(1.06);
        transform-origin: center;
    }


    .special-link {
        font-weight: bold;
        margin-left: 16px;
        background-image: linear-gradient(225deg, #0084ff, #743fde);
        transition: all .2s;
    }

    .special-link:hover {
        transform: scale(1.06);
        transform-origin: center;
    }

    .profile-icon-cont {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 16px;
    }

    .nav-link:hover {
        background-color: #004280;
    }

    .logo {
        height: 50px;
        /*width: 60px;*/
        cursor: pointer;
    }

    .top-text {
        font-size: 18px;
        color: var(--text);
    }

    @media only screen and (max-width: 1000px) {
        .top-text {
            display: none;
        }

    }

    @media only screen and (max-width: 600px) {
        .top-navigation-container {
            display: none;
        }

    }
</style>

<div class="top-navigation-container">
    <div class="nav-padding">
        <div class="top-navigation">
            <div class="logo-cont">
                <Boop rotation={10} timing={200}>
                    <a href="/"><img alt="cv logo" class="logo" loading="eager" rel="preload"
                                     src="/assets/CVHS-logo.png"/></a>
                </Boop>
                <div class="top-text">CVHS Community Service {response.user.role}</div>
            </div>

            <div class="navigation-links">
                <a href="/" class="nav-link">Home</a>

                <a href="/orgs" class="nav-link">Info</a>

                <a href="/help" class="nav-link">Help</a>

                <a href="/register" class="nav-link">Register</a>

                {#if response.signedIn}
                    <div class="profile-icon-cont">
                        <a href="/dashboard" class="profile-link" in:blur={{delay: 150, duration: 300}}>
                            <ProfileIcon firstName={response.user.firstName} lastName={response.user.lastName}
                                         iconSize="48" fontSize="16"/>
                        </a>
                    </div>
                {:else}
                    <a href="/login" class="nav-link special-link">Sign In</a>
                {/if}
            </div>
        </div>
    </div>
</div>
