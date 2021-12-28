<script setup lang="ts">
import { ShoppingItem } from "@/classes/shopping";
import { shoppingStore } from "@/stores/shoppingListPinia";

const store = shoppingStore();

const props = defineProps<{
    shoppingItem: ShoppingItem;
}>();

function updateShoppingItem() {
    store.updateItem(props.shoppingItem);
}
</script>

<template>
    <div class="card-container">
        <div class="title-container">
            <div class="title">Name:</div>
            <input
                @blur="updateShoppingItem"
                v-model="shoppingItem.name"
                class="value"
            />
        </div>
        <div class="price-container">
            <div class="title">Price:</div>
            <input
                @blur="updateShoppingItem"
                v-model="shoppingItem.price"
                class="value"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 15rem;
    box-shadow: 3px 3px 3px lightgrey;
    height: 6rem;
    padding: 1rem;
    margin: 0.5rem;
    background-color: rgb(247, 247, 247);

    .title {
        font-weight: bold;
        padding-bottom: 0.5rem;
    }

    .value,
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-container,
    .price-container {
        display: flex;
        flex-direction: column;
        padding: 0.25rem;
    }
}
</style>
