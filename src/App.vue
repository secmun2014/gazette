<template>
    <v-app>
        <v-app-bar density="compact" color="primary" app>
            <v-toolbar-title class="text-center font-weight-bold" @click="$router.push('/')">SECMUN</v-toolbar-title>
        </v-app-bar>

        <v-main class="fill-height">
            <router-view />
        </v-main>

        <v-footer color="secondary">
            <v-row dense>
                <v-col class="text-center" cols="12">
                    <a href="https://www.instagram.com/secmun2024?igsh=MW1qbWt4bW9qZ2k3bg==" target="_blank"
                        rel="noopener" style="text-decoration: none;" class="text-white">
                        <v-btn text="secmun2024" prepend-icon='mdi-instagram' variant="text" />
                    </a>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script setup></script>

<style>
@font-face {
    font-family: 'Literaturnaya';
    src: url('./fonts/LiteraturnayaBold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Literaturnaya';
    src: url('./fonts/LiteraturnayaBoldItalic.woff2') format('woff2');
    font-weight: bold;
    font-style: italic;
}

* {
    font-family: 'Literaturnaya', serif;
}
</style>