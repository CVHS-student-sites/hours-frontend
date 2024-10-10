<script>
    export let id;

    function click(){
        alert(id);
    }
</script>

<button on:click={click}>test</button>