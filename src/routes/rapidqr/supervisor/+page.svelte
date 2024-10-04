<script>
    import { io } from "socket.io-client";
    import {onMount} from "svelte";

    let socket;

    onMount((async) => {
        socket = io("http://localhost:3000");

        socket.on("connect", () => {

            console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        });

        socket.on("disconnect", () => {
            console.log(socket.id); // undefined
        });

        socket.on("message", (data) => {
            console.log(data);
        });
    });

    function emit(){
        socket.emit('message', `hello people`);
    }
</script>

<button on:click={emit}>Send hello to people</button>
