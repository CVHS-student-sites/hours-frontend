<script>
    import StudentBottomNavigation from "$lib/components/composites/dashboard/student/StudentBottomNavigation.svelte";
    import SupervisorBottomNavigation
        from "$lib/components/composites/dashboard/supervisor/SupervisorBottomNavigation.svelte";

    import {loadStudentData} from "$lib/api/utils/state.js";
    import {BarLoader} from "svelte-loading-spinners";
    import {onMount} from "svelte";
    import {blur} from 'svelte/transition';


    export let data;

    let loading = true;

    onMount(async () => {
        loading = true;

        if (data.response.user.role === "student") {
            await loadStudentData();
        }

        loading = false;
    });
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

    .loading-cont {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .loading-text {
        font-weight: bold;
        font-size: 16px;
    }
</style>

<div class="layout-main">
    {#if loading}
        <div class="loading-cont" out:blur={{ duration: 200}}>
            <BarLoader size="100" color="#0084ff" unit="px" duration="1.2s"/>
            <div class="loading-text">Loading your dashboard</div>
        </div>
    {:else}
        <slot/>

        {#if data.response.user.role === "student"}
            <StudentBottomNavigation data={data}/>
        {:else if data.response.user.role === "supervisor"}
            <SupervisorBottomNavigation data={data}/>
        {/if}
    {/if}
</div>
