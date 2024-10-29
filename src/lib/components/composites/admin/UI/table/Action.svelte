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

    .transition-colors {
        transition-property: background-image,background-color,border-color,text-decoration-color,fill,stroke;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
    }

    .action-btn:hover {
        background-color: var(--secondary);
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

<div class="action-btn transition-colors" on:click={click}>
    <div class="material-symbols-outlined">more_vert</div>
</div>