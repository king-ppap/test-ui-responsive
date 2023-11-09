<template>
    <span v-if="icon" v-html="icon" />
</template>

<script lang="ts">
export default {
    props: {
        name: String,
    },
    async setup(props) {
        const temp = {
            ...import.meta.glob('~/assets/svg/*.svg', { as: 'raw' }),
            ...import.meta.glob('~/assets/svg/*/*.svg', { as: 'raw' }),
        };
        const icon = props.name && ((await temp[props.name]()) || props.name);
        return {
            icon,
        };
    },
};
</script>
