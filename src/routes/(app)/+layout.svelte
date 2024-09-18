<script>
    import TopNav from "$lib/components/TopNav/TopNav.svelte";
    // import Botnav from "$lib/components/Botnav.svelte";
</script>

<style>
    /* todo fix weird layout shift on google when keyboard deployed */
    .layout-main {
        font-family: "Montserrat", sans-serif;
        background-color: var(--background);
        display: flex;
        flex-direction: column;
        height: 100%;
        position: absolute;
        width: 100vw;
    }
</style>


<div class="layout-main">
    <TopNav/>
    <slot/>
    <!--    <Botnav/>-->
</div>
