<script>
    import TopNavigation from "$lib/components/composites/app/TopNavigation.svelte";
    import BottomNavigation from "$lib/components/composites/app/BottomNavigation.svelte";

    export let data;
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
    <slot/>
    <BottomNavigation data={data}/>
</div>