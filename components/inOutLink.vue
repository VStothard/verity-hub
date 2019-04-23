<template>
    <div>
        <a v-if="linkOut" :href="params" target="_blank">
            <slot></slot>
        </a>
        <nuxt-link :to="params" v-else class="title no-underline text-slate-500">
            <slot></slot>
        </nuxt-link>

    </div>

</template>
<script>
export default {
    props: {
        linkOut: {
            type: Boolean,
            default: false
        },
        params: {}
    }
}
</script>
