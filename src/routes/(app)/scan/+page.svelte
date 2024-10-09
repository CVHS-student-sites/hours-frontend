<script>
    import {Html5Qrcode} from "html5-qrcode";
    import {onMount} from "svelte";

    onMount(() => {
        const html5QrCode = new Html5Qrcode(/* element id */ "reader");
        html5QrCode.start(
            {facingMode: "environment"},
            {
                fps: 10,    // Optional, frame per seconds for qr code scanning
                // qrbox: {width: 200, height: 200}  // Optional, if you want bounded box UI
            },
            (decodedText, decodedResult) => {
                // do something when code is read
                console.log(decodedText, decodedResult);
                html5QrCode.stop();
            },
            (errorMessage) => {
                // parse error, ignore it.
            })
            .catch((err) => {
                // Start failed, handle it.
                console.log(err);
            });
    });
</script>

<svelte:head>
    <title>RapidQR System</title>
</svelte:head>

<style>
    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vw;
        flex: 1;
    }

    #reader {
        width: 100%;
    }

    .scanning-container{
        display: flex;
        padding: 10px;
        box-sizing: border-box;
    }

</style>

<div class="main">
    <h1>Rapid QR scanning</h1>
    <div class="scanning-container">
        <div id="reader" width="100%"></div>
    </div>

</div>
