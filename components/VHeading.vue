<template>
    <h2 :class="`${themeClasses}`">{{heading}}</h2>
</template>
<script>
export default {
    data() {
        return {
            default: 'text-sm text-grey-400 font-base uppercase mb-4 mt-0 text-left'
        }
    },
    props: {
        heading: {
            type: String,
            required: true,
            default: 'A heading'
        },
        theme: {
            props: {
                type: String
            }
        }
    },
    computed: {
        themeClasses() {
            switch (this.heading) {
                case 'discrete':
                    return this.default
                default:
                    return this.default
            }
        }
    }
}
</script>
