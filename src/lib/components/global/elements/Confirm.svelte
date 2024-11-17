<script>
    import { run } from 'svelte/legacy';

    import {fade, scale} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';

    let dialog = $state();
    /** @type {{showDialog?: boolean, heading?: string, message?: string}} */
    let { showDialog = $bindable(false), heading = "", message = "" } = $props();

    function openDialog() {
        dialog.showModal();
    }

    run(() => {
        if (dialog && showDialog) {
            openDialog();
        }
    });

    function closeDialog() {
        dialog.close();
        showDialog = false;
    }
</script>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 10;
    }

    dialog {
        color: var(--text);
        display: flex;
        flex-direction: column;
        border: none;
        border-radius: 8px;
        padding: 24px;
        /* border: 1px solid white; */
        z-index: 20;
        gap: 10px;
        background-color: #1c1b22;
    }

    .text-cont {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 462px;
    }

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    .button-cont {
        display: flex;
        width: 100%;
        gap: 8px;
        justify-content: flex-end;
    }

    .button-main {
        padding: 8px 16px 8px 16px;
        border-radius: 6px;
        border: none;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s;

    }

    .button-main:hover {
        cursor: pointer;
        background-color: grey;

    }

    .highlight {
        background-color: var(--primary);
    }

</style>

{#if showDialog}
    <div class="overlay" in:fade={{ duration: 160 }}></div>

    <dialog bind:this={dialog} onclose={() => (showDialog = false)}
            in:scale={{ duration: 160,  opacity: 0.5, start: 0.9, easing: quintOut }}>

        <div class="text-cont">
            <h3>{heading}</h3>
            <p>{message}</p>
        </div>
        <div class="button-cont">
            <button class="button-main" onclick={closeDialog}>Cancel</button>
            <button class="button-main highlight" onclick={closeDialog}>Continue</button>
        </div>
    </dialog>
{/if}
