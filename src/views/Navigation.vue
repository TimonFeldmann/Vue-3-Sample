<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavigationItem from "@/components/Navigation/NavigationItem.vue";

const currentRoute = computed(() => {
    return useRoute().name;
});
</script>

<template>
    <div class="navigation-container">
        <div class="navigation-container__header">{{ currentRoute }}</div>
        <img class="logo" src="@/assets/logo.png" />
        <NavigationItem
            route-name="Shopping List"
            display-name="Shopping List"
        ></NavigationItem>
        <NavigationItem
            route-name="Shopping List Report"
            display-name="Shopping List Report"
        ></NavigationItem>
    </div>
</template>

<style lang="scss">
.navigation-container {
    width: 17rem;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #1f2937;
    inset: -2px -2px 6px #4a004a;

    &__header {
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
        padding: 0.5rem 0 0.5rem 0;
    }

    .logo {
        width: 5rem;
        height: 5rem;
        padding-bottom: 0.5rem;
    }
}
</style>
