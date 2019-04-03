<template>
    <div class="inline-block">
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
            default: 'filled'
        },
        colorway: {
            type: String,
            default: 'grey'
        }
    },
    computed: {
        themeClasses() {
            const base = `border-2 border-${this.colorway}-500 bg-${this.colorway}-500 hover:bg-${this.colorway}-400 hover:border-${this.colorway}-400 text-white`

            switch (this.theme) {
                case 'filled': 
                    return base
                case 'outlined':
                    return `border-2 border-${this.colorway}-500 text-${this.colorway}-500 hover:border-${this.colorway}-400 hover:bg-${this.colorway}-400 hover:text-white`
                default:
                    return base
            }
        }
    }
}
</script>
