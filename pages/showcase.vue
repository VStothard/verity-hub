<template >
    <div class="p-4 md:p-8">
        <div>
            <h1>Welcome to the project!</h1>
            <p><a class="text-link" href="https://sleepy-northcutt-e1bcd6.netlify.com/showcase/">See it live here!</a></p>
            <p>This file showcases the design guide and available components within this project.</p>
            <p>The project has been built using Nuxt.js, Tailwind, Contentful &amp; Netlify.</p>
        </div>
        <div class="spacer">
            <h2>Colors</h2>
            <p><span class="text-red">TODO:</span> create a color density plot for peach and slate</p>
            <p>The colors used in this project are:</p>
            <ColorSpread></ColorSpread>
        </div>
        <div class="spacer">
            <h2>Typography</h2>
            <p>Typography throughout the site will be set gloablly using a base scss file.</p>
        </div>
        <div class="spacer">
            <h2>Buttons</h2>
            <p>The button component uses props to set the type, state and theme of a button.</p>
            <p class="font-bold my-2">Default</p>
            <VButton button-text="Default button"></VButton>
            <p class="font-bold my-2">Filled</p>
            <VButton theme="filled" button-text="Filled button with colorway" colorway='peach'></VButton>
            <VButton theme="filled" button-text="Filled button with colorway" colorway='slate'></VButton>
            <p class="font-bold my-2">Outlined</p>
            <VButton theme="outlined" button-text="Outlined button with colorway" colorway='peach'></VButton>
            <VButton theme="outlined" button-text="Outlined button with colorway" colorway='slate'></VButton>
        </div>
        <div class="spacer">
            <h2>Preview tile</h2>
            <p>The blog preview component allows the user to set a thumbnail image, heading, intro text and some other details about a piece of content.</p>
            <p>By clicking on the tile, the user will be taken to the relevant piece of content.</p>
            <PreviewTile 
                content-title="Some content"
                content-intro="A bit of information about this content."
                content-date="01/08/1993"
                content-category="Blog post"
            ></PreviewTile>
        </div>
    </div>
</template>
<style lang="scss">
.spacer {
    @apply mt-8
}

.text-link {
    @apply no-underline text-peach-500;

    &:hover {
        @apply text-peach-400;
    }
}
</style> 