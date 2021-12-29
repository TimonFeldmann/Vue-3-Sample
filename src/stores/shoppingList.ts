// Deprecated - Use shoppingListPinia instead.

import { reactive, computed } from "vue";
import { ShoppingList, ShoppingItem } from "@/classes/shopping";
import { ShoppingListApiClientInstance } from "@/api/shoppingListAxiosClient";

let state = reactive({
    shoppingList: new ShoppingList(),
});

export const actions = {
    createItem: async () => {
        const shoppingItem =
            await ShoppingListApiClientInstance.CreateShoppingItem(
                state.shoppingList.id
            );

        mutations.addItem(shoppingItem);
    },
};

export const getters = {
    itemString: computed(() =>
        state.shoppingList.shoppingItems.length
            ? state.shoppingList.shoppingItems.reduce(
                  (previous, current) =>
                      `${previous} Name: ${current.name}, Price: $${current.price}<br>`,
                  ""
              )
            : null
    ),
};

export const mutations = {
    addItem: (item: ShoppingItem) => state.shoppingList.AddItem(item),
    setShoppingList: (shoppingList: ShoppingList) =>
        (state.shoppingList = new ShoppingList(shoppingList)),
};
