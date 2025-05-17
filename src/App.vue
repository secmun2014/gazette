<template>
    <v-app>
        <v-app-bar absolute density="compact" :color="pdf ? 'background' : 'primary'" flat>
            <template #prepend>
                <v-btn prepend-icon="mdi-menu" text="menu" stacked size="x-small" @click.stop="drawer = !drawer" />
            </template>
            <v-app-bar-title v-if="!pdf" class=" text-h4 text-center carol-gothic" @click="$router.push('/')">
                s e c m u n
            </v-app-bar-title>
            <template #append>
                <v-btn prepend-icon="mdi-mailbox" text="subscribe" stacked size="x-small"
                    @click="subscribe = !subscribe" />
            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-divider></v-divider>
            <v-list>
                <v-list-item prepend-icon="mdi-home" title="home" value="home" @click="$router.push('/')"></v-list-item>
                <v-list-item prepend-icon="mdi-information-slab-symbol" title="about" value="about"
                    @click="$router.push('/about')"> </v-list-item>
            </v-list>
            <v-divider></v-divider>
        </v-navigation-drawer>

        <v-main class=" fill-height">
            <router-view />
        </v-main>

        <v-footer color="secondary">
            <v-row class="d-flex flex-row align-center justify-center text-center ma-0">
                <v-col class="pa-0">
                    <v-btn size="x-small" append-icon="mdi-instagram" variant="text" text="follow us"
                        href="https://www.instagram.com/secmun2024" target="_blank" rel="noopener" />
                </v-col>
                <v-divider class="border-opacity-100" vertical />
                <v-col class="pa-0">
                    <v-btn size="x-small" append-icon="mdi-email-multiple" variant="text" text="contact us"
                        @click="contact = !contact" />
                </v-col>
            </v-row>
        </v-footer>

        <v-dialog width="auto" v-model="subscribe" close-on-back>
            <v-card color="primary">
                <v-card-title class="text-h4 text-center carol-gothic">
                    Stay Connected
                </v-card-title>

                <v-card-title class="d-flex align-center px-14">
                    <v-icon>mdi-email-fast</v-icon>
                    <v-progress-linear indeterminate />
                    <v-icon>mdi-mailbox</v-icon>
                </v-card-title>

                <v-card-text class="text-center text-wrap mx-6">
                    Join our Google Group to get email updates for new releases.
                </v-card-text>

                <v-card-text class="text-center">
                    <v-btn class="font-weight-bold" text="subscribe now!" append-icon="mdi-open-in-new" variant="flat"
                        href="https://groups.google.com/g/secmun-gazette" target="_blank"
                        @click="subscribe = !subscribe" /><br />
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-bottom-sheet width="auto" v-model="contact" close-on-back inset>
            <v-card color="primary">
                <v-card-title class="carol-gothic text-center">Contact Emails</v-card-title>
                <v-card-text class="text-left mx-auto pt-0">
                    <v-tooltip :open-on-click="true" :open-on-hover="false" :persistent="false" text="email copied">
                        <template #activator="{ props }">
                            <v-btn v-bind="props" class="text-lowercase" prepend-icon="mdi-email" variant="text"
                                text="tet.secmun2014@gmail.com" @click="copyLink('tet.secmun2014@gmail.com')" />
                        </template>
                    </v-tooltip>
                    <br />
                    <v-tooltip :open-on-click="true" :open-on-hover="false" :persistent="false" text="email copied">
                        <template #activator="{ props }">
                            <v-btn v-bind="props" class="text-lowercase" prepend-icon="mdi-email" variant="text"
                                text="secretariat.secmun2014@gmail.com"
                                @click="copyLink('secretariat.secmun2014@gmail.com')" />
                        </template>
                    </v-tooltip>
                </v-card-text>
            </v-card>
        </v-bottom-sheet>
    </v-app>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const drawer = ref(false);
const pdf = computed(() => ((route.path === "/" || route.path === "/about") ? true : false));
const subscribe = ref(false);
const contact = ref(false);
const copyLink = (text) => {
    navigator.clipboard.writeText(text);
};
</script>

<style>
@font-face {
    font-family: "Literaturnaya";
    src: url("./fonts/Literaturnaya.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: "CarolGothic";
    src: url("./fonts/CarolGothic.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}

body {
    font-family: "Literaturnaya";
}

.carol-gothic {
    font-family: "CarolGothic" !important;
}
</style>