<script lang="ts">
    let className: string | undefined | null = undefined;
    export { className as class };
    export let props: {
        select: never;
        sort: {
            order: "desc" | "asc" | undefined;
            toggle: (_: Event) => void;
            clear: () => void;
            disabled: boolean;
        };
        filter: never;
    };
    export let cellId: string;

    let isDropdownOpen = false;

    function handleAscSort(e: Event) {
        if (props.sort.order === "asc") return;
        props.sort.toggle(e);
    }

    function handleDescSort(e: Event) {
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
    }
    .dropdown-content {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
        display: none;
    }
    .dropdown-container[data-open="true"] .dropdown-content {
        display: block;
    }
    .dropdown-item {
        display: flex;
        align-items: center;
        padding: 0.25rem 0.5rem;
        cursor: pointer;
    }
    .dropdown-item:hover {
        background: #f0f0f0;
    }
    .icon {
        margin-right: 0.5rem;
        font-size: 0.875rem;
    }
</style>

{#if !props.sort.disabled}
    <div class="dropdown-container" data-open={isDropdownOpen} class={className}>
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

        <div class="dropdown-content" role="menu">
            <div class="dropdown-item" on:click={handleAscSort}>
                <span class="icon">⬆️</span> Asc
            </div>
            <div class="dropdown-item" on:click={handleDescSort}>
                <span class="icon">⬇️</span> Desc
            </div>
            <hr />
            <div class="dropdown-item" on:click={handleHide}>
                <span class="icon">👁️</span> Hide
            </div>
        </div>
    </div>
{:else}
    <slot />
{/if}
