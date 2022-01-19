<script setup lang="ts">
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";

function setGridData(args: any) {
    args.childGrid.dataSource = args.data.ShoppingItems;
}

const data = new DataManager({
    url: "https://localhost:7200/odata/ShoppingList",
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

const childGrid = {
    queryString: "ShoppingListId",
    allowFiltering: true,
    allowSorting: true,
    filterSettings: {
        type: "Menu",
    },
    columns: [
        {
            field: "Id",
            headerText: "Item Id",
        },
        { field: "ShoppingListId", headerText: "Shopping List Id" },
        { field: "Name", headerText: "Item Name" },
        { field: "Price", headerText: "Item Price" },
    ],
    load() {
        (this as any).parentDetails.parentKeyFieldValue = (
            this as any
        ).parentDetails.parentRowData["Id"];
    },
};
</script>

<template>
    <div class="component-library-container">
        <ejs-grid
            ref="gridRef"
            :data-source="data"
            :allow-paging="true"
            :allow-filtering="true"
            :allow-sorting="true"
            :filter-settings="filterSettings"
            :page-settings="pageSettings"
            :child-grid="childGrid"
            @detailDataBound="setGridData"
        >
            <e-columns>
                <e-column type="string" field="Id" headerText="Id"></e-column>
                <e-column field="UserId" headerText="User Id"></e-column>
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
