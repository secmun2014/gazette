<template>
    <v-container>
        <v-data-table :headers="headers" :items="edmundian_newsletters" item-key="id" hover hide-default-footer>
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
</script>
