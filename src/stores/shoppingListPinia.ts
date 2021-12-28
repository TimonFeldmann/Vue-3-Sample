import { ShoppingList, ShoppingItem } from "@/classes/shopping";
import { ShoppingListApiClientInstance } from "@/api/shoppingListAxiosClient";
import { defineStore } from "pinia";

export const shoppingStore = defineStore("shoppingList", {
    state: () => ({
        shoppingList: new ShoppingList(),
    }),
    getters: {
        itemString: (state) =>
            state.shoppingList.shoppingItems.length
                ? state.shoppingList.shoppingItems.reduce(
                      (previous, current) =>
                          `${previous} Name: ${current.name}, Price: $${current.price}<br>`,
                      ""
                  )
                : null,
    },
    actions: {
        async createItem() {
            const shoppingItem =
                await ShoppingListApiClientInstance.CreateShoppingItem(
                    this.shoppingList.id
                );

            this.addItem(shoppingItem);
        },
        addItem(item: ShoppingItem) {
            this.shoppingList.AddItem(item);
        },
        setShoppingList(shoppingList: ShoppingList) {
            this.shoppingList = new ShoppingList(shoppingList);
        },
    },
});
