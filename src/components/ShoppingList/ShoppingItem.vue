<script setup lang="ts">
import { ShoppingItem } from "@/classes/shopping";
import { shoppingStore } from "@/stores/shoppingListPinia";
import { ref } from "vue";

const store = shoppingStore();

const props = defineProps<{
    shoppingItem: ShoppingItem;
}>();

const containerClass = ref("card-container");

async function updateShoppingItem() {
    await store.updateItem(props.shoppingItem);

    containerClass.value = "card-container saving-enter-active";
}

function resetContainerClass() {
    containerClass.value = "card-container";
}
</script>

<template>
    <div :class="containerClass" @animationend="resetContainerClass">
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
    color: white;
    width: 15rem;
    box-shadow: 3px 3px 3px lightgrey;
    height: 6rem;
    padding: 1rem;
    margin: 0.5rem;
    background-color: #1f2937;

    input {
        color: white;
        text-align: center;
        background-color: #364760;
    }

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

.saving-enter-active {
    animation: saving-in 0.5s;
}

.saving-leave-active {
    animation: saving-in 0.5s reverse;
}

@keyframes saving-in {
    from {
        opacity: 0.55;
        background-color: #bdb143;
    }
    to {
        opacity: 1;
    }
}
</style>
