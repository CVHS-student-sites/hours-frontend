<script>

    export let props = {
        select: null,
        sort: {
            order: undefined,
            toggle: (_) => {},
            clear: () => {},
            disabled: false,
        },
        filter: null,
    };
    export let cellId;

    let isDropdownOpen = false;

    function handleAscSort(e) {
        if (props.sort.order === "asc") return;
        props.sort.toggle(e);
    }

    function handleDescSort(e) {
        if (props.sort.order === "desc") return;
        if (props.sort.order === undefined) {
            props.sort.toggle(e); // Toggle from undefined to 'asc'
        }
        props.sort.toggle(e); // Toggle from 'asc' to 'desc'
    }

    function handleHide() {
        // Add your custom logic for hiding columns here
    }
</script>

<style>
    .dropdown-container {
        position: relative;
        display: inline-flex;
        align-items: center;
    }
    .dropdown-button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: var(--muted);
        padding: 0;
    }
    .icon {
        margin-right: 0.5rem;
        font-size: 0.875rem;
    }
</style>

{#if !props.sort.disabled}
    <div class="dropdown-container" data-open={isDropdownOpen}>
        <button
                class="dropdown-button"
                on:click={() => (isDropdownOpen = !isDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
        >
            <slot />
            {#if props.sort.order === "desc"}
                <span class="icon">⬇️</span>
            {:else if props.sort.order === "asc"}
                <span class="icon">⬆️</span>
            {:else}
                <span class="icon">↕️</span>
            {/if}
        </button>
    </div>
{:else}
    <slot />
{/if}
