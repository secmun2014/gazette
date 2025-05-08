<template>
    <v-card flat>
        <v-card-title v-if="$vuetify.display.mobile" class="carol-gothic text-center text-h4">
            St. Edmund's College<br>Model United Nations
        </v-card-title>
        <v-card-title v-else class="carol-gothic text-center text-h4">
            St. Edmund's College - Model United Nations
        </v-card-title>
        <v-tabs v-model="store.tab" color="primary" grow center-active>
            <v-tab value="0" class="text-none font-weight-bold">The Edmundian Times</v-tab>
            <v-tab value="1" class="text-none font-weight-bold">The EdBlazon Times</v-tab>
            <v-tab value="2" class="text-none font-weight-bold">Ed-MUN-dian Diplomacy</v-tab>
        </v-tabs>
        <v-tabs-window v-model="store.tab">
            <v-tabs-window-item value="0">
                <EdmundianGallery />
            </v-tabs-window-item>
            <v-tabs-window-item value="1">
                <EdBlazonGallery />
            </v-tabs-window-item>
            <v-tabs-window-item value="2">
                <MagazineGallery />
            </v-tabs-window-item>
        </v-tabs-window>
    </v-card>
</template>

<script setup>
import EdBlazonGallery from "../components/EdBlazonGallery.vue";
import EdmundianGallery from "../components/EdmundianGallery.vue";
import MagazineGallery from "../components/MagazineGallery.vue";
import { useStore } from '../store.js'

const store = useStore()

</script>
