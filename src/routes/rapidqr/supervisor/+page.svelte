<script>
    import { io } from "socket.io-client";
    import QRCode from 'qrcode';
    import { onMount } from "svelte";

    let socket;
    let canvasElement;

    onMount(() => {
        socket = io("http://localhost:3000");

        socket.on("connect", () => {
            console.log(socket.id);
        });

        socket.on("disconnect", () => {
            console.log(socket.id);
        });

        socket.on("message", (data) => {
            console.log(data);
            QRCode.toCanvas(canvasElement, data, { errorCorrectionLevel: 'M' }, function (error) {
                if (error) console.error(error);
                console.log('QR code generated successfully!');
            });
        });
    });

</script>

<canvas bind:this={canvasElement}></canvas>
