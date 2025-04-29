<template>
    <v-container>
        <v-select v-model="store.edblazonYear" :items="availableYears" label="Year" density="compact"
            variant="outlined" />
        <v-data-table :headers="headers" :items="filteredNewsletters" item-key="id" hover hide-default-footer>
            <template v-slot:item.date="{ item }">
                {{ new Date(item.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long' }) }}
            </template>

            <template v-slot:item.actions="{ item }">
                <v-btn variant="text" density="comfortable" icon="mdi-book-open-page-variant"
                    @click="$router.push('/edblazon/' + item.id)" />
                <v-btn variant="text" density="comfortable" icon="mdi-share-variant" @click="copyLink(item.id)" />
            </template>
        </v-data-table>
    </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { edblazon_newsletters } from '../assets.js'
import { useStore } from '../store.js'

const store = useStore()

const headers = [
    { title: 'Title', value: 'title', sortable: true },
    { title: 'Release', value: 'date', sortable: true },
    { title: '', value: 'actions', align: 'end' },
]

const emit = defineEmits(['copied'])

const copyLink = (id) => {
    const url = `${window.location.origin}/edblazon/${id}`
    navigator.clipboard.writeText(url).then(() => emit('copied'))
}

const availableYears = [...new Set(edblazon_newsletters.map(n => new Date(n.date).getFullYear()))].sort((a, b) => b - a)

if (!store.edblazonYear) {
    store.edblazonYear = availableYears[0]
}

const filteredNewsletters = computed(() =>
    edblazon_newsletters.filter(item => new Date(item.date).getFullYear() === Number(store.edblazonYear))
)
</script>