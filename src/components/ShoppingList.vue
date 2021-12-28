<script setup lang="ts">
import { actions, mutations, getters } from "@/stores/shoppingList";
import { onMounted, ref, toRef } from "vue";
import { ShoppingListApiClientInstance } from "@/api/shoppingListAxiosClient";

const itemString = getters.itemString;

async function createShoppingItem() {
    await actions.createItem();
}

defineProps<{
    pageTitle: string;
}>();

onMounted(async () => {
    const shoppingList = await ShoppingListApiClientInstance.GetShoppingList(
        "c041da71-be3d-4ad7-8efd-0cdeb61676a3"
    );

    mutations.setShoppingList(shoppingList);
});
</script>

<template>
    <div>{{ pageTitle }}</div>
    <div @click="createShoppingItem" v-html="itemString"></div>
</template>

<style scoped></style>
