<script setup lang="ts">
// import { actions, mutations, getters } from "@/stores/shoppingList";
import { shoppingStore } from "@/stores/shoppingListPinia";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { ShoppingListApiClientInstance } from "@/api/shoppingListAxiosClient";

const store = shoppingStore();

const { itemString } = storeToRefs(store);

async function createShoppingItem() {
    await store.createItem();
}

defineProps<{
    pageTitle: string;
}>();

onMounted(async () => {
    const shoppingList = await ShoppingListApiClientInstance.GetShoppingList(
        "c041da71-be3d-4ad7-8efd-0cdeb61676a3"
    );

    store.setShoppingList(shoppingList);
});
</script>

<template>
    <div>{{ pageTitle }}</div>
    <div @click="createShoppingItem" v-html="itemString"></div>
</template>

<style scoped></style>
