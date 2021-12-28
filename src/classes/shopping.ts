export type CreateUpdateShoppingItemDto = {
    name: string;
    price: number;
};

export class ShoppingItem {
    public id: string = "";
    public name: string = "";
    public price: number = 0;

    constructor(shoppingItemData: ShoppingItem | null = null) {
        if (shoppingItemData !== null) {
            this.id = shoppingItemData.id;
            this.name = shoppingItemData.name;
            this.price = shoppingItemData.price;
        }
    }
}

export class ShoppingList {
    public id: string = "";
    public userId: string = "";
    public shoppingItems: ShoppingItem[] = [];

    constructor(shoppingListData: ShoppingList | null = null) {
        if (shoppingListData !== null) {
            this.id = shoppingListData.id;
            this.userId = shoppingListData.userId;

            shoppingListData.shoppingItems.forEach((x) => this.AddItem(x));
        }
    }

    public AddItem(item: ShoppingItem) {
        this.shoppingItems.push(
            new ShoppingItem({
                name: item.name,
                price: item.price,
                id: item.id,
            })
        );
    }
}
