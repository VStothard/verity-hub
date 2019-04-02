<template >
    <div class="p-4 md:p-8">
        <div>
            <h1>Welcome to the project!</h1>
            <p>This file showcases the design guide and available components within this project.</p>
            <p>The project has been built using Nuxt.js, Tailwind, Contentful &amp; Netlify.</p>
        </div>
        <div class="spacer">
            <h2>Buttons</h2>
            <p>The button component uses props to set the type, state and theme of a button.</p>
            <VButton button-text="Default button"></VButton>
            <VButton theme="filled" button-text="Filled button with colorway" colorway='blue'></VButton>
            <VButton theme="outlined" button-text="Outlined button with colorway" colorway='blue'></VButton>
        </div>
        <div class="spacer">
            <h2>Typography</h2>
            <p>Typography throughout the site will be set gloablly using a base scss file.</p>
        </div>
        <div class="spacer">
            <h2>Preview tile</h2>
            <p>The blog preview component allows the user to set a thumbnail image, heading, intro text and some other details about a piece of content.</p>
            <p>By clicking on the tile, the user will be taken to the relevant piece of content.</p>
            <PreviewTile></PreviewTile>
        </div>
    </div>
</template>
<style>
.spacer {
    @apply mt-8
}
</style>