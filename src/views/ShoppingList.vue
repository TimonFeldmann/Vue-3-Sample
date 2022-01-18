<script setup lang="ts">
import { shoppingStore } from "@/stores/shoppingListPinia";
import { userStore } from "@/stores/userPinia";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import ShoppingItem from "@/components/ShoppingList/ShoppingItem.vue";

const shoppingStoreInstance = shoppingStore();
const userStoreInstance = userStore();

const { shoppingItems } = storeToRefs(shoppingStoreInstance);
const { user } = storeToRefs(userStoreInstance);

async function createShoppingItem() {
    await shoppingStoreInstance.createItem();
}

onMounted(async () => {
    shoppingStoreInstance.getShoppingListForUser(user.value.id);
});
</script>

<template>
    <div class="shopping-list-container">
        <div class="shopping-list-container__header">
            {{ user.name }}'s Shopping List
        </div>
        <div class="shopping-item-container">
            <transition-group name="fade">
                <ShoppingItem
                    v-for="shoppingItem in shoppingItems"
                    :shopping-item="shoppingItem"
                    :key="shoppingItem.id"
                ></ShoppingItem>
            </transition-group>
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
    justify-content: flex-start;

    &__header {
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
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        background-color: #41b883;
        width: 15rem;
        height: 3rem;
        box-shadow: 3px 3px 3px lightgrey;
        margin: 1rem;
    }
}

.fade-enter-active {
    animation: fade-in 1s;
}

.fade-leave-active {
    animation: fade-in 1s reverse;
}

@keyframes fade-in {
    from {
        opacity: 0;
        background-color: #42b883;
    }
    to {
        opacity: 1;
    }
}
</style>
