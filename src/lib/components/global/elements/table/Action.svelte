<script>
    export let id;

    function click(){
        alert(id);
    }
</script>

<style>
    .action-btn{
        width: 32px;
        height: 32px;
        background-color: black;
    }
</style>

<div class="action-btn" on:click={click}>test</div>