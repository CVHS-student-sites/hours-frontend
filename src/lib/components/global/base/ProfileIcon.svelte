<script>
    /** @type {{firstName?: string, lastName?: string, iconSize?: number, fontSize?: number}} */
    let {
        firstName = "",
        lastName = "",
        iconSize = 48,
        fontSize = 16
    } = $props();

    let initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

    const oneDarkColors = [
        '#61AFEF', // blue
        '#E06C75', // red
        '#98C379', // green
        '#E5C07B', // yellow
        '#C678DD', // purple
        '#56B6C2', // cyan
        '#D19A66', // orange
    ];

    const colors = [
        // Shades of #0084ff (Blue)
        '#3399FF', // Medium Blue
        '#005BB5', // Dark Blue
        '#00A3E0', // Sky Blue
        '#0084CC', // Teal Blue
        '#00BFFF', // Electric Blue
        '#00B2FF', // Cyan Blue
        '#A67BC0', // Lavender
        '#9B57D1', // Medium Purple
        '#5E1D80', // Dark Purple
        '#9B59B6', // Amethyst
        '#8E44AD', // Plum
        '#6F2C91', // Deep Purple
        '#8A2BE2', // Violet
    ];


    function hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash);
    }

    function getColorFromName(firstName, lastName) {
        const hash = hashString(`${firstName} ${lastName}`);
        const colorIndex = hash % colors.length;
        return colors[colorIndex];
    }

    let backgroundColor = getColorFromName(firstName, lastName);
</script>

<style>
    .user-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 50%;
        user-select: none;
    }
</style>

<div class="user-icon"
     style="background-color: {backgroundColor}; width: {iconSize}px; height: {iconSize}px; font-size: {fontSize}px;">
    {initials}
</div>
