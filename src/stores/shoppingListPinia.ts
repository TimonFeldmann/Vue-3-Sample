import { ShoppingList, ShoppingItem } from "@/classes/shopping";
import { ShoppingListApiClientInstance } from "@/api/shoppingListAxiosClient";
import { defineStore } from "pinia";

export const shoppingStore = defineStore("shoppingList", {
    state: () => ({
        shoppingList: new ShoppingList(),
    }),
    getters: {
        shoppingItems(): ShoppingItem[] {
            return this.shoppingList.shoppingItems;
        },
    },
    actions: {
        async getShoppingList() {
            const shoppingList =
                await ShoppingListApiClientInstance.GetShoppingList(
                    "c041da71-be3d-4ad7-8efd-0cdeb61676a3"
                );

            this.setShoppingList(shoppingList);
        },
        async createItem() {
            const shoppingItem =
                await ShoppingListApiClientInstance.CreateShoppingItem(
                    this.shoppingList.id
                );

            this.addItem(shoppingItem);
        },
        async updateItem(shoppingItem: ShoppingItem) {
            const updatedShoppingItem =
                await ShoppingListApiClientInstance.UpdateShoppingItem(
                    this.shoppingList.id,
                    shoppingItem.id,
                    shoppingItem
                );

            return updatedShoppingItem;
        },
        addItem(shoppingItem: ShoppingItem) {
            this.shoppingList.AddItem(shoppingItem);
        },
        setShoppingList(shoppingList: ShoppingList) {
            this.shoppingList = new ShoppingList(shoppingList);
        },
    },
});
