<script>
    import {tilt} from "./effect.js";
</script>

<style>
    .main {
        width: 350px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transform: perspective(1000px);
        background-image: url('/assets/heart.svg');
        background-size: contain;
    }

    .inner {
        width: 140px;
        height: 140px;
        transform: translateZ(50px) translateY(-20px);
    }

    .logo {
        width: 140px;
        height: 140px;
        pointer-events: none;
        user-select: none;
    }

    @media screen and (max-width: 600px) {
        .main {
            width: 150px;
            height: 150px;
        }

        .inner {
            width: 100px;
            height: 100px;
            transform: translateZ(30px);
        }

        .logo {
            width: 100px;
            height: 100px;
        }

    }
</style>


<div class="main"
     use:tilt={{ "full-page-listening": true, reverse: true, glare: false, "max-glare":0.5, speed:2000, "max":"10", perspective:500 }}>
    <div class="inner">
        <img class="logo" alt="cvhs falcon logo" src="/assets/CVHS-logo.png">
    </div>
</div>

