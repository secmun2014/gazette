<template>
    <iframe :src="pdfViewerUrl" width="100%" class="fill-height" style="border: none;"></iframe>
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

const base = import.meta.env.BASE_URL
const relativePath = selectedCollection.find(item => item.id === id)?.src || ''

const pdfViewerUrl = ref(
    `${base}pdfjs/web/viewer.html?file=${encodeURIComponent(base + relativePath)}`
)
</script>