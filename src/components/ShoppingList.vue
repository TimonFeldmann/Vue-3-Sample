<script setup lang="ts">
// import { actions, mutations, getters } from "@/stores/shoppingList";
import { shoppingStore } from "@/stores/shoppingListPinia";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import ShoppingItem from "@/components/ShoppingItem.vue";

const store = shoppingStore();

const { shoppingItems } = storeToRefs(store);

async function createShoppingItem() {
    await store.createItem();
}

defineProps<{
    pageTitle: string;
}>();

onMounted(async () => {
    store.getShoppingList();
});
</script>

<template>
    <div class="shopping-list-container">
        <div class="shopping-list-title">{{ pageTitle }}</div>
        <div class="shopping-item-container">
            <ShoppingItem
                v-for="shoppingItem in shoppingItems"
                :shopping-item="shoppingItem"
                @updated=""
            ></ShoppingItem>
        </div>
        <div class="shopping-list-add-item" @click="createShoppingItem">
            Create Shopping Item
        </div>
    </div>
</template>

<style scoped lang="scss">
.shopping-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .shopping-list-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.5rem;
        padding-bottom: 1.5rem;
    }
    .shopping-item-container {
        display: flex;
        flex-wrap: wrap;
    }

    .shopping-list-add-item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        background-color: rgb(177, 230, 177);
        width: 15rem;
        height: 3rem;
        box-shadow: 3px 3px 3px lightgrey;
        margin: 1rem;
    }
}
</style>
