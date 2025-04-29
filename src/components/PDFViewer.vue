<template>

    <iframe :src="pdfSrc" width="100%" class="fill-height" style="border: none;"></iframe>

</template>


<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { magazines, edblazon_newsletters, edmundian_newsletters } from '../assets.js'

const collections = {
    magazine: magazines,
    edblazon: edblazon_newsletters,
    edmundian: edmundian_newsletters,
}

const route = useRoute()

const [_, collectionKey, idStr] = route.path.split('/')
const id = Number(idStr)
const selectedCollection = collections[collectionKey] || []

const pdfSrc = ref(selectedCollection.find(item => item.id === id)?.src || '')
</script>
