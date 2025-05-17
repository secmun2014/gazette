<template>
    <v-container>
        <v-select hide-details v-model="store.edmundianYear" :items="availableYears" label="Year" density="compact"
            variant="outlined" />
        <v-data-table :headers="headers" :items="filteredNewsletters" item-key="id" hover hide-default-footer>
            <template v-slot:item.date="{ item }">
                {{
                    new Date(item.date).toLocaleDateString(undefined, {
                        day: "numeric",
                        month: "long",
                    })
                }}
            </template>

            <template v-slot:item.actions="{ item }">
                <v-btn variant="text" density="comfortable" icon="mdi-book-open-page-variant"
                    @click="$router.push('/edmundian/' + item.id)" />
                <v-tooltip :open-on-click="true" :open-on-hover="false" :persistent="false" text="link copied">
                    <template #activator="{ props }">
                        <v-btn v-bind="props" variant="text" density="comfortable" icon="mdi-share-variant"
                            @click="copyLink(item.id)" />
                    </template>
                </v-tooltip>
            </template>
        </v-data-table>
    </v-container>
</template>

<script setup>
import { edmundian_newsletters } from "../assets.js";
import { computed } from "vue";
import { useStore } from '../store.js'
const store = useStore()

const headers = [
    { title: "Title", value: "title", sortable: true },
    { title: "Release", value: "date", sortable: true },
    { title: "", value: "actions", align: "end" },
];

const copyLink = (id) => {
    const base = import.meta.env.BASE_URL;
    const url = `${window.location.origin}${base}#/edmundian/${id}`;
    navigator.clipboard.writeText(url);
};

const availableYears = [
    ...new Set(edmundian_newsletters.map((n) => new Date(n.date).getFullYear())),
].sort((a, b) => b - a);

if (!store.edmundianYear) {
    store.edmundianYear = availableYears[0];
}

const filteredNewsletters = computed(() =>
    edmundian_newsletters.filter(
        (item) => new Date(item.date).getFullYear() === Number(store.edmundianYear)
    )
);
</script>
