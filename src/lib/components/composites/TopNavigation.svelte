<style>
    .logo-cont a {
        display: inherit;
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
        margin-left: 20px;
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

    .special-link {
        font-weight: bold;
        margin-left: 16px;
        background-image: linear-gradient(225deg, #0084ff, #743fde);

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

    @media only screen and (max-width: 600px) {
        .top {
            display: none;
        }

    }
</style>

<div class="top-navigation-container">
    <div class="nav-padding">
        <div class="top-navigation">
            <div class="logo-cont">
                <a href="/"><img alt="cv logo" class="logo" loading="eager" rel="preload" src="/assets/CVHS-logo.png"/></a>
                <div class="top-text">CVHS Community Service</div>
            </div>

            <div class="navigation-links">
                <a href="/" class="nav-link">
                    Home
                </a>

                <a href="/help" class="nav-link">
                    Help
                </a>

                <a href="/register" class="nav-link">
                    Register
                </a>

                <a href="/login" class="nav-link special-link">
                    Sign In
                </a>
            </div>
        </div>
    </div>
</div>
