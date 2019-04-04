<template>
    <div class="block sm:flex justify-between items-center">
        <div class="w-full sm:pr-2" :class="{'w-1/2': showImageColumn, 'w-full': !showImageColumn}">
            <form method="POST" @submit.prevent="submitHandler">
                <input type="text" placeholder="Your name"/>
                <input type="email" placeholder="Your email address">
                <VButton type="filled" button-text="Submit"></VButton>
            </form>
        </div>
        <div v-if="showImageColumn" class="w-full sm:w-1/2 sm:pl-2 flex justify-center items-center">
            <img :src="imgURL" alt="imgAlt"/>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        showImageColumn: {
            type: Boolean,
            default: true
        },
        imgURL: {
            type: String,
            default: 'https://source.unsplash.com/random/400x450'
        },
        imgAlt: {
            type: String,
            required: true
        }
    },
    methods: {
        submitHandler() {
            console.log('Submit the form!')
        }
    }
}
</script>
