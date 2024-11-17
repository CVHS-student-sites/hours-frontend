<script>
    import TopNavigation from "$lib/components/composites/app/TopNavigation.svelte";
    import BottomNavigation from "$lib/components/composites/app/BottomNavigation.svelte";

    /** @type {{data: any, children?: import('svelte').Snippet}} */
    let { data, children } = $props();
</script>

<style>
    /* todo fix weird layout shift on google when keyboard deployed */
    .layout-main {
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        color: var(--text);
        display: flex;
        flex-direction: column;
        height: 100%;
        position: absolute;
        width: 100vw;
    }
</style>

<div class="layout-main">
    <TopNavigation data={data}/>
    {@render children?.()}
    <BottomNavigation data={data}/>
</div>