<template>
    <v-snackbar v-model="copied" timeout="1000" color="success">
        <div class="text-center w-100">LINK COPIED!</div>
    </v-snackbar>


    <v-tabs v-model="store.tab" color="accent" grow center-active>
        <v-tab value="0" class="text-none font-weight-bold">The Edmundian Times</v-tab>
        <v-tab value="1" class="text-none font-weight-bold">The EdBlazon Times</v-tab>
        <v-tab value="2" class="text-none font-weight-bold">Ed-MUN-dian Diplomacy</v-tab>
    </v-tabs>
    <v-tabs-window v-model="store.tab">
        <v-tabs-window-item value="0">
            <EdmundianGallery @copied="copied = true" />
        </v-tabs-window-item>
        <v-tabs-window-item value="1">
            <EdBlazonGallery @copied="copied = true" />
        </v-tabs-window-item>
        <v-tabs-window-item value="2">
            <MagazineGallery @copied="copied = true" />
        </v-tabs-window-item>
    </v-tabs-window>
</template>

<script setup>
import EdBlazonGallery from "../components/EdBlazonGallery.vue";
import EdmundianGallery from "../components/EdmundianGallery.vue";
import MagazineGallery from "../components/MagazineGallery.vue";
import { ref } from 'vue'
import { useStore } from '../store.js'

const store = useStore()

const copied = ref(false)
</script>
