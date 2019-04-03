<template>
    <div class="spacer inline-block">
        <button :type="type" :class="`p-4 font-bold ${themeClasses}`">{{buttonText}}</button>
    </div>
</template>
<script>
export default { 
    props: {
        type: {
            type: String,
            default: 'button' // options 'submit', 'reset', 'button
        },
        buttonText: {
            type: String,
            default: 'Button'
        },
        theme: {
            type: String,
            default: 'filled' // options 'filled', 'outlined'
        },
        colorway: {
            type: String,
            default: 'grey' // options - any color defined in tailwind.js, the color way should be just the base name e.g 'peach' rather than 'peach-500'
        }
    },
    computed: {
        themeClasses() {
            const base = `border-2 border-${this.colorway} bg-${this.colorway} hover:bg-${this.colorway}-dark hover:border-${this.colorway}-dark text-white`

            switch (this.theme) {
                case 'filled': 
                    return base
                case 'outlined':
                    return `border-2 border-${this.colorway} text-${this.colorway} hover:border-${this.colorway}-dark hover:bg-${this.colorway}-dark hover:text-white`
                default:
                    return base
            }
        }
    }
}
</script>
