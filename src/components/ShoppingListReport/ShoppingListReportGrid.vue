<script setup lang="ts">
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";

const data = new DataManager({
    url: "https://localhost:7200/odata/ShoppingListReport",
    adaptor: new ODataV4Adaptor(),
    crossDomain: true,
});

const filterSettings = {
    type: "Menu",
};

const pageSettings = {
    pageSizes: true,
    pageSize: 5,
};
</script>

<template>
    <div class="report-container">
        <ejs-grid
            :data-source="data"
            :allow-paging="true"
            :allow-filtering="true"
            :allow-sorting="true"
            :filter-settings="filterSettings"
            :page-settings="pageSettings"
        >
            <e-columns>
                <e-column field="Id" headerText="Id"></e-column>
                <e-column
                    field="ShoppingListId"
                    headerText="Shopping List Id"
                ></e-column>
                <e-column field="UserId" headerText="User Id"></e-column>
                <e-column field="UserName" headerText="User Name"></e-column>
                <e-column
                    field="ShoppingItemNames"
                    headerText="Shopping Item Names"
                ></e-column>
                <e-column
                    field="ShoppingListTotalValue"
                    headerText="Shopping List Value"
                ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>

<style lang="scss">
.report-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
</style>
