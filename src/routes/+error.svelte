<script>
    import {page} from '$app/stores';
</script>

<svelte:head>
    <title>Lookup</title>

    <meta
            name="description"
            content="Find your locker at Crescenta Valley High School (CVHS) with our locker lookup tool. Easily locate your locker and get organized for the school year."
    />
    <meta
            name="keywords"
            content="Crescenta Valley High School, CVHS, locker lookup, locker search, school locker"
    />
    <meta name="author" content="cvapps.net"/>
</svelte:head>

<style>
    h1 {
        margin: 0;
        font-size: 36px;
    }

    .logo {
        width: 120px;
    }

    .main {
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: var(--background);
    }

    .sub {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        flex: 1;
        color: var(--text);
    }

    .message{
        font-size: 18px;
        margin: 0;
    }
</style>

<div class="main">
    <div class="sub">
        <div class="message">Oops! Something broke...</div>
        <div class="message">Probably your fault, but we’ll pretend it's ours.</div>
        <a href="/"><img alt="cv logo" class="logo" loading="eager" rel="preload" src="/assets/CVHS-logo.png"/></a>
        <h1>{$page.status} {$page.error.message}</h1>
    </div>
</div>
