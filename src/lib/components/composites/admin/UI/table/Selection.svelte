<script>
    /** @type {{isSelected: any, isSomeSubRowsSelected: any}} */
    let { isSelected, isSomeSubRowsSelected } = $props();
</script>

<input type="checkbox" bind:checked={$isSelected} indeterminate={$isSomeSubRowsSelected} />
