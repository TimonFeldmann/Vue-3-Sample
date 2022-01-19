<script setup lang="ts">
import ShoppingListGrid from "@/components/ShoppingListReport/ShoppingListGrid.vue";
import ShoppingListReportGrid from "@/components/ShoppingListReport/ShoppingListReportGrid.vue";
</script>

<template>
    <div class="shopping-list-report-container">
        <div class="shopping-list-report-container__report-title">
            All Shopping Lists
        </div>
        <ShoppingListGrid></ShoppingListGrid>
        <div class="shopping-list-report-container__report-title">
            All Shopping List Reports
        </div>
        <ShoppingListReportGrid></ShoppingListReportGrid>
    </div>
</template>

<style lang="scss">
.shopping-list-report-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__report-title {
        font-weight: bold;
        font-size: 1.5rem;
        padding: 3rem 0 3rem 0;
    }
}
</style>
