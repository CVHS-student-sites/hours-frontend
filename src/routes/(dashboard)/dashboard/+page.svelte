<script>
    import StudentDashboard from "./views/StudentDashboard.svelte";
    import SupervisorDashboard from "./views/SupervisorDashboard.svelte";

    import {BarLoader} from "svelte-loading-spinners";
    import {onMount} from "svelte";
    import {blur} from 'svelte/transition';
    import {loadStudentData} from "$lib/api/utils/state.js";

    let currentView;
    let loading = true;

    export let data;


    onMount(async () => {
        loading = true;

        if (data.response.user.role === "student") {
            currentView = StudentDashboard;
            await loadStudentData();
        }
        if (data.response.user.role === "supervisor") currentView = SupervisorDashboard;

        loading = false;
    });
</script>

<style>
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

{#if loading}
    <div class="loading-cont" out:blur={{ duration: 200}}>
        <BarLoader size="100" color="#0084ff" unit="px" duration="1.2s"/>
        <div class="loading-text">Loading your dashboard</div>
    </div>
{:else}
    <svelte:component this={currentView}/>
{/if}
