<script>
    import {fade} from 'svelte/transition';
    import ProfileIcon from "$lib/components/global/base/ProfileIcon.svelte";

    import {checkLoginStatus} from "$lib/api/global.js";
    import {onMount} from 'svelte';
    import {blur} from 'svelte/transition';

    let isSignedIn = false;
    let response;

    //todo this should be forced server side logic
    onMount(async () => {
        response = await checkLoginStatus()
        isSignedIn = response.data.signedIn;
    });


</script>

<style>

    :global(.botnav-active) {
        /* Style for the active icon with the box */
        background-color: #003566;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        /*transition: background-color 0.5s ease;*/
    }

    .icond a {
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


    .icon-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }


    .stack-text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: var(--text);
        user-select: none;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        color: var(--text);
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        -webkit-tap-highlight-color: transparent;
        font-size: 30px;
        width: 30px;
        height: 30px;
    }

    .icond {
        z-index: 9998;
        position: relative;
    }

    .icon-cont {
        width: 100vw;
        display: flex;
        align-items: center;
        -webkit-tap-highlight-color: transparent;
        /*height: 48px;*/
        justify-content: space-around;
    }


    .botnav-main {
        font-family: "Montserrat", sans-serif;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 10px;
    }

    @media only screen and (min-width: 600px) {
        .botnav-main {
            display: none; /* Hide the entire top container */
        }
    }
</style>

<div class="botnav-main">
    <div class="icon-cont">
        <a href="/">
            <div class="icon-group">
                <div class="material-symbols-outlined icond">
                    home
                </div>
                <div class="stack-text">Home</div>
            </div>
        </a>
        <a href="/help">
            <div class="icon-group">
                <div class="material-symbols-outlined icond">
                    question_mark
                </div>
                <div class="stack-text">Help</div>
            </div>
        </a>
        {#if isSignedIn}
            <a href="/scan">
                <div class="icon-group">
                    <div class="material-symbols-outlined icond">
                        qr_code_scanner
                    </div>
                    <div class="stack-text">Scan</div>
                </div>
            </a>
        {:else}
            <a href="/register">
                <div class="icon-group">
                    <div class="material-symbols-outlined icond" >
                        person_add
                    </div>
                    <div class="stack-text">Register</div>
                </div>
            </a>
        {/if}

        {#if isSignedIn}
            <a href="/dashboard" in:blur={{delay: 150, duration: 300}}>
                <ProfileIcon firstName={response.data.user.firstName} lastName={response.data.user.lastName}
                             iconSize="48" fontSize="16"/>
            </a>
        {:else}
            <a href="/login">
                <div class="icon-group">
                    <div class="material-symbols-outlined icond" in:fade={{ duration: 300 }}>
                        login
                    </div>
                    <div class="stack-text">Login</div>
                </div>
            </a>
        {/if}

    </div>
</div>



