<script>
    // views
    import StudentDashboard from "./views/StudentDashboard.svelte";

    import {Moon} from "svelte-loading-spinners";
    import {checkLoginStatus} from "$lib/api/global.js";
    import {onMount} from "svelte";

    let currentView;
    let loading = true;
    let role;

    //todo might be cool to start an initial loading procedure here for views, but I dont think that's worth it honestly
    onMount(async () => {
        console.log();
        let loginCheckResponse = await checkLoginStatus();
        role = loginCheckResponse.data.user.role;
        console.log(role);

        if (role === "student") currentView = StudentDashboard;

        loading = false;
    });
</script>

<style>
    .loading-cont {
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
    <div class="loading-cont">
        <Moon size="60" color="#0084ff" unit="px" duration="0.6s"/>
        <div class="loading-text">Loading your dashboard</div>
    </div>
{:else}
    <svelte:component this={currentView}/>
{/if}
