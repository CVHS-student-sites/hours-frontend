<script>
    import { run } from 'svelte/legacy';

    import { spring } from 'svelte/motion';

    let isBooped = $state(false);
    /** @type {{rotation?: number, timing?: number, children?: import('svelte').Snippet}} */
    let { rotation = 0, timing = 150, children } = $props();

    let springyRotation = spring(0, {
        stiffness: 0.1,
        damping: 0.15
    });

    run(() => {
        springyRotation.set(isBooped ? rotation : 0);
    });

    let style = $derived(`
		display: inline-block;
		transform: rotate(${$springyRotation}deg)
	`);

    run(() => {
        if (isBooped) {
            window.setTimeout(() => {isBooped = false}, timing);
        }
    });

    function triggerBoop() {
        isBooped = true;
    }
</script>

<!-- trigger onclick so demo works on mobile -->
<span onmouseenter={triggerBoop} onclick={triggerBoop} style={style}>
	{@render children?.()}
</span>