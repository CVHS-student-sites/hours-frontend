<script>
    import ProfileIcon from "$lib/components/global/base/ProfileIcon.svelte";

    let date = new Date();
    let data = [


        {
            "id": "ADSHAIDWQOIUEHOWQUIDIQNWEDOIQWUN",
            "amount": 2.5,
            "organization": "test",
            "comment": "hour for something",
            "status": "pending",
            "supervisor": "birdpump@gmail.com",
            "date": date
        },

        {
            "id": "ADSHAIDWQOIUEHOWQUIDIQNWEDOIQWUN",
            "amount": 2.5,
            "organization": "test",
            "comment": "hour for something",
            "status": "pending",
            "supervisor": "birdpump@gmail.com",
            "date": date
        },

        {
            "id": "ADSHAIDWQOIUEHOWQUIDIQNWEDOIQWUN",
            "amount": 2.5,
            "organization": "test",
            "comment": "hour for something",
            "status": "pending",
            "supervisor": "birdpump@gmail.com",
            "date": date
        },


    ]
</script>

<style>
    .main {
        width: 100%;
        height: 100vh;
        background-color: var(--background);
    }

    .table-cont {
        font-family: "Montserrat", sans-serif;
        color: var(--text);

    }

    .table-cont {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .element-cont {
        display: flex;
        flex-direction: column;
        /*background-color: #19171c;*/
        /*border: 2px solid #4f4f4f;*/
        position: relative;
        padding: 8px;
        height: 100px;
        box-sizing: border-box;
        border-radius: 10px;

    }

    .text-data-cont {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
    }

    .data-cont {
        display: flex;
        flex-direction: column;
        /* height: 100%; */
        /* background-color: black; */

    }

    .hour-text {
        font-size: 24px;
        color: var(--text)
    }

    .date {
    }


    .info-cont {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: end;
    }

    .text-div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        align-items: end;
    }

    .data-div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    .menu-cont {
        /* position: absolute;
        bottom: 10px;
        right: 10px; */

        height: 36px;
        width: 36px;
        background-color: darkgray;
    }

    .innter-text-1 {
        text-align: right;
        color: #bebac4;
    }

    .comment-text {
        color: #bebac4;
    }

    .pending {
        color: darkgreen;
    }

    .complete{
        color: darkgreen;
    }
</style>

    <div class="table-cont">
        {#each data as item, i}
            <div class="element-cont">

                <div class="text-data-cont">
                    <div class="data-cont">
                        <div class="data-div">
                            <div class="comment-text">May 1, 2024</div>
                            <div class="hour-text">2 hours</div>
                            <!--                            <div class="comment-text pending">Completed</div>-->
                            <div class="material-symbols-outlined complete">
                                check_circle
                            </div>
                        </div>
                    </div>
                    <div class="info-cont">
                        <div class="text-div">
                            <div class="innter-text-1">Falcon Robotics</div>


                            <ProfileIcon iconSize={42} fontSize={14} firstName="Marc" lastName="Hyeler"/>
                            <!--                             <div class="innter-text-1">Falcon Robotics FLL</div>-->
                        </div>

                    </div>
                </div>


            </div>

        {/each}
    </div>