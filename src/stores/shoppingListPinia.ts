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
        async getShoppingListForUser(id: string) {
            const shoppingList =
                await ShoppingListApiClientInstance.GetShoppingListForUser(id);

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
