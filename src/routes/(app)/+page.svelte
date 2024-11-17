<script>
    import {blur, slide} from 'svelte/transition';
    import {onMount} from 'svelte';

    let visible = $state(false);
    onMount(() => {
        visible = true;
    });
</script>

<svelte:head>
    <title>CVHS Volunteering</title>

    <meta
            content="Manage your locker at Crescenta Valley High School (CVHS) with our locker system tool. Easily locate and register your locker and get organized for the school year."
            name="description"
    />
    <meta
            content="Crescenta Valley High School, CVHS, locker app, locker system, locker site, school locker, locker manager"
            name="keywords"
    />
    <meta content="cvapps.net" name="author"/>
</svelte:head>

<style>
    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
        flex: 1;
    }

    .list {
        padding: 2vw;
    }

    .big-logo {
        display: block;
        max-height: 20vh;
        margin-left: auto;
        margin-right: auto;
    }

    .landing {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }


    .sub {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
    }

    .sub1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);
        /*width: 50%;*/
    }

    .info-cont {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        flex-direction: column;
    }

    .list-cont {
        justify-content: center;
        display: flex;

        width: 550px;
        border: 2px solid #0069cc;
        border-radius: 100px;
        padding: 8px;
        box-sizing: content-box;

        -webkit-box-shadow: 0px 0px 15px 0px rgba(5, 119, 219, 0.16);
        -moz-box-shadow: 0px 0px 15px 0px rgba(5, 119, 219, 0.16);
        box-shadow: 0px 0px 15px 0px rgba(5, 119, 219, 0.16);

    }

    p {
        width: 500px;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        color: var(--text);
        text-align: center;
        margin: 0;
    }

    h1 {
        margin: 0;
    }

    h3 {
        margin-bottom: 6px;
        color: #acacb0;
        /*align-self: flex-start;*/
    }

    .animation-cont {
        height: 57px;
        display: flex;
        align-items: center;
    }

    .special-text {
        background-image: linear-gradient(45deg, var(--primary), var(--accent) 25%, var(--primary) 50%, var(--accent) 75%, var(--primary));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        font-weight: bold;
        opacity: 1;

    }

    @media screen and (max-width: 600px) {
        .sub {
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            justify-content: center;
            height: 100%;
        }


        h1 {
            font-size: 20px;
        }

        h3 {
            font-size: 14px;
        }

        p {
            width: 90%;
            font-size: 12px;
        }

        .animation-cont {
            height: 48px;
        }

        .list-cont {
            width: 90vw;
        }

    }


    @media screen and (max-width: 1115px) {
        .tilt {
            display: none;
        }
    }
</style>

<div class="main">
    <div class="sub">
        {#if visible}
            <div class="sub1">


                <div class="landing">
                    <h1 class="special-text" in:blur={{ delay: 50, duration: 300 }}>Welcome To CV Community Service</h1>
                    <h3 in:blur={{ delay: 300, duration: 500 }}>Some useful info to get you started</h3>

                    <div class="info-cont">
                        <div class="animation-cont">
                            <div class="list-cont" in:slide={{ delay: 700, duration: 350, axis: 'y' }}>
                                <p><b>Volunteering isn’t optional</b>—unless you enjoy the sweet, sweet smell of zero
                                    recognition.</p>
                            </div>
                        </div>

                        <div class="animation-cont">
                            <div class="list-cont" in:slide={{ delay: 850, duration: 350, axis: 'y' }}>
                                <p><b>Non-profits don’t pay you.</b> If they do, congrats, you’re probably working at a
                                    real job. Try again.</p>
                            </div>
                        </div>

                        <div class="animation-cont">
                            <div class="list-cont" in:slide={{ delay: 1000, duration: 350, axis: 'y' }}>
                                <p><b>Enter your hours</b>—because if it’s not on the site, did you even volunteer, or
                                    are you just a professional nap-taker?</p>
                            </div>
                        </div>
                        <div class="animation-cont">
                            <div class="list-cont" in:slide={{ delay: 1150, duration: 350, axis: 'y' }}>
                                <p><b>Be on your best behavior.</b> If you embarrass the school, we’ll just claim we’ve
                                    never heard of you.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        {/if}
    </div>
</div>
