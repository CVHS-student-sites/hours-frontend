<script>
    export let id;

    function click() {
        alert(id);
    }
</script>

<style>
    .action-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        background-color: black;
    }

    .action-btn:hover {
        background-color: var(--accent);
        cursor: pointer;
    }

    .material-symbols-outlined {
        font-size: 24px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<div class="action-btn" on:click={click}>
    <div class="material-symbols-outlined">more_vert</div>
</div>