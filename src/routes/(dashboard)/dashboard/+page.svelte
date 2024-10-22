<script>
    // views
    import StudentDashboard from "./views/StudentDashboard.svelte";
    import SupervisorDashboard from "./views/SupervisorDashboard.svelte";

    import {BarLoader, Moon} from "svelte-loading-spinners";
    import {checkLoginStatus} from "$lib/api/global.js";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    let currentView;
    let loading = true;
    let role;

    //todo might be cool to start an initial loading procedure here for views, but I dont think that's worth it honestly
    onMount(async () => {
        console.log();
        let loginCheckResponse = await checkLoginStatus();
        if (!loginCheckResponse.data.signedIn) {
            await goto('/login');
        } else {
            role = loginCheckResponse.data.user.role;
            console.log(role);

            if (role === "student") currentView = StudentDashboard;
            if (role === "supervisor") currentView = SupervisorDashboard;
            if (role === "admin") await goto('/admin');

            loading = false;
        }
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
        <BarLoader size="100" color="#0084ff" unit="px" duration="1.2s"/>
        <div class="loading-text">Loading your dashboard</div>
    </div>
{:else}
    <svelte:component this={currentView}/>
{/if}
