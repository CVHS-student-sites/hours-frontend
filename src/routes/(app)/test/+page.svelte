<script>
    import ProfileIcon from "$lib/components/app/ProfileIcon.svelte";

    import {checkLoginStatus} from "$lib/api/global.js";
    import {onMount} from "svelte";

    onMount(async () => {
        console.log(await checkLoginStatus());

    });
</script>

<ProfileIcon firstName="test" lastName="user" iconSize="48" fontSize="16"/>