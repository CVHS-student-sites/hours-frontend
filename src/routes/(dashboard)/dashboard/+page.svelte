<script>
    import StudentDashboard from "./views/StudentDashboard.svelte";
    import SupervisorDashboard from "./views/SupervisorDashboard.svelte";

    import {BarLoader} from "svelte-loading-spinners";
    import {checkLoginStatus} from "$lib/api/global.js";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";
    import {blur} from 'svelte/transition';
    import {loadStudentData} from "$lib/api/utils/state.js";

    let currentView;
    let loading = true;
    let role;

    onMount(async () => {
        loading = true;

        let loginCheckResponse = await checkLoginStatus();
        if (!loginCheckResponse.data.signedIn) {
            await goto('/login');
        } else {
            role = loginCheckResponse.data.user.role;
            console.log(role);

            //todo depending on the role, lets preload data into a store in this block
            if (role === "student"){
                currentView = StudentDashboard;
                await loadStudentData();
            }
            if (role === "supervisor") currentView = SupervisorDashboard;
            if (role === "admin") await goto('/admin');

            loading = false;
        }
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
