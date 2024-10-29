<script>
    import SidenavAdmin from "$lib/components/composites/admin/SidenavAdmin.svelte";
    import TopAdminNavigation from "$lib/components/composites/admin/TopAdminNavigation.svelte";
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

    .center {
        gap: 16px;
        display: flex;
        flex: 1;
        margin: 20px 12vw;
        overflow: hidden;
    }

    @media screen and (max-width: 1500px) {
        .center {
            margin: 20px 16px;
        }
    }
</style>

<div class="layout-main">
    <TopAdminNavigation/>
    <div class="center">
        <SidenavAdmin/>
        <slot/>
    </div>
</div>
