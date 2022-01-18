<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
    routeName: string;
    displayName: string;
}>();

const isActive = computed(() => {
    return useRoute().name === props.routeName;
});

const navigationItemClass = computed(() => {
    let className = "navigation-item-container__link";

    if (isActive.value === true) {
        className = `${className}--active`;
    }

    return className;
});
</script>

<template>
    <div class="navigation-item-container">
        <router-link
            custom
            v-slot="{ href, route, navigate, isActive, isExactActive }"
            :to="{ name: routeName }"
        >
            <div @click="navigate" :class="navigationItemClass">
                {{ displayName }}
            </div>
        </router-link>
    </div>
</template>

<style lang="scss">
.navigation-item-container {
    width: 100%;

    &__link,
    &__link--active {
        cursor: pointer;
        margin: 0.5rem 0 0.5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: #364760;
        height: 3rem;
    }

    &__link--active {
        background-color: #41b883;
    }
}
</style>
