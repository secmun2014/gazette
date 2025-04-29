<template>
    <v-container>
        <v-data-table :headers="headers" :items="edmundian_newsletters" item-key="id" hover hide-default-footer>
            <template v-slot:item.date="{ item }">
                {{ new Date(item.date).toLocaleDateString(undefined, { day: 'numeric', month: 'long' }) }}
            </template>

            <template v-slot:item.actions="{ item }">
                <v-btn variant="text" density="comfortable" icon="mdi-book-open-page-variant"
                    @click="$router.push('/edmundian/' + item.id)" />
                <v-btn variant="text" density="comfortable" icon="mdi-share-variant" @click="copyLink(item.id)" />
            </template>
        </v-data-table>
    </v-container>
</template>

<script setup>
import { edmundian_newsletters } from '../assets.js'

const headers = [
    { title: 'Title', value: 'title', sortable: true },
    { title: 'Release', value: 'date', sortable: true },
    { title: '', value: 'actions', align: 'end' }
]

const emit = defineEmits(['copied'])

const copyLink = (id) => {
    const url = `${window.location.origin}/edblazon/${id}`;
    navigator.clipboard.writeText(url).then(() => {
        emit('copied')
    })
}
</script>