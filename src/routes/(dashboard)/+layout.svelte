<script>
    import StudentBottomNavigation from "$lib/components/composites/dashboard/student/StudentBottomNavigation.svelte";
    import SupervisorBottomNavigation
        from "$lib/components/composites/dashboard/supervisor/SupervisorBottomNavigation.svelte";

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
    <slot/>

    {#if data.response.user.role === "student"}
        <StudentBottomNavigation data={data}/>
    {:else if data.response.user.role === "supervisor"}
        <SupervisorBottomNavigation data={data}/>
    {/if}
</div>
