<template>
    <div>
        <nuxt-link :to="contentLink">
            <div class="w-full h-64 bg-cover bg-center" :style="`background-image: url('${bgImage}')`"></div>
        </nuxt-link>
        <h2 v-if="contentTitle">{{contentTitle}}</h2>
        <p v-if="contentDate">{{contentDate}}</p>
        <p v-if="contentCategory">{{contentCategory}}</p>
        <p v-if="contentIntro">{{contentIntro}}</p>
        TODO: This will be the preview tile
    </div>
</template>
<script>
export default {
    props: {
        bgImage: {
            type: String,
            default: 'https://source.unsplash.com/random'
        },
        contentLink: {
            type: String,
            default: '/'
        },
        contentTitle: {
            type: String
        },
        contentIntro: {
            type: String
        },
        contentDate: {
            type: String
        },
        contentCategory: {
            type: String
        }
    }
}
</script>