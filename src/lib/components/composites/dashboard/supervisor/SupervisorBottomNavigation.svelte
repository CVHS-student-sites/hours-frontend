<script>

    /** @type {{data: any}} */
    let { data } = $props();
    const {response} = data;
</script>

<style>
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
        gap: 2px;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }


    .stack-text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
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
        font-size: 24px;
        width: 24px;
        height: 24px;
    }

    .material-symbols-rounded {
        font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
        color: var(--text);
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        -webkit-tap-highlight-color: transparent;
        font-size: 24px;
        width: 24px;
        height: 24px;
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
        justify-content: space-around;
    }


    .botnav-main {
        position: fixed;
        bottom: 0;
        font-family: "Montserrat", sans-serif;
        width: 100vw;
        height: 56px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        background-color: rgba(6, 5, 8, 0.7);
        backdrop-filter: blur(24px);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    @media only screen and (min-width: 600px) {
        .botnav-main {
            display: none;
        }
    }
</style>

<div class="botnav-main">
    <div class="icon-cont">
        <a href="/static">
            <div class="icon-group">
                <div class="material-symbols-rounded icond">
                    person
                </div>
                <div class="stack-text">Profile</div>
            </div>
        </a>
        <a href="/help">
            <div class="icon-group">
                <div class="material-symbols-rounded icond">
                    task_alt
                </div>
                <div class="stack-text">Approve</div>
            </div>
        </a>

        <a href="/scan">
            <div class="icon-group">
                <div class="material-symbols-rounded icond">
                    qr_code_scanner
                </div>
                <div class="stack-text">Scan</div>
            </div>
        </a>

        <a href="/dashboard">
            <div class="icon-group">
                <div class="material-symbols-rounded icond">
                    trending_up
                </div>
                <div class="stack-text">Stats</div>
            </div>
        </a>

    </div>
</div>