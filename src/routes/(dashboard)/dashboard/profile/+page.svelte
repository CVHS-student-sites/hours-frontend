<script>
    import ProfileIcon from "$lib/components/global/base/ProfileIcon.svelte";
    import {goto} from "$app/navigation";

    export let data;
    const {response} = data;

    function logout(){
        localStorage.removeItem('token');
        goto('/');
    }
</script>

<style>
    .main {
        height: 100%;
        width: 100%;
        display: flex;

        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .top-text {
        color: var(--text);
        font-size: 24px;
        user-select: none;
        font-weight: bold;
    }

    .logout-button{
        height: 44px;
        border-radius: 6px;
        border: 2px solid darkred;
        padding: 6px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logout-button-test{
        color: darkred;
        font-size: 18px;
        user-select: none;
        font-weight: bold;
    }

    @media only screen and (max-width: 600px) {
        .main {
            margin-bottom: 57px;
        }
    }
</style>
<div class="main">
    <ProfileIcon firstName={response.user.firstName} fontSize="10vw" iconSize="30vw" lastName={response.user.lastName}/>
    <div class="top-text">Your Profile</div>

    <div class="logout-button" on:click={logout}>
        <div class="logout-button-test">Logout</div>
    </div>
</div>