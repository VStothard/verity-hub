<template>
    <div>
        <template v-for="(color, key) in colors">
            <div class="inline-block" :key='key'>
                <div :class="`inline-block w-48 h-24 mr-2 mt-2 rounded bg-${key}`"></div>
                <span class="my-2 block italic">~ {{key}}</span>
            </div>
        </template>
    </div>
</template>
<script>
import { colors } from "../tailwind";
export default {
    data() {
        return {
            colors: colors
        }
    }
}
</script>

