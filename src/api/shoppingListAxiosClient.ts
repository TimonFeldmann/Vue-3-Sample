import {
    ShoppingItem,
    ShoppingList,
    CreateUpdateShoppingItemDto,
} from "@/classes/shopping";
import axios, { AxiosInstance } from "axios";

class ShoppingListApiClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: "http://localhost:5200",
            timeout: 1000,
            headers: { "X-Custom-Header": "foobar" },
        });
    }

    public async GetShoppingList(userId: string): Promise<ShoppingList> {
        const shoppingList = await this.axiosClient.get<ShoppingList>(
            `/User/${userId}`
        );

        return shoppingList.data;
    }

    public async CreateShoppingItem(
        shoppingListId: string
    ): Promise<ShoppingItem> {
        const shoppingItem = await this.axiosClient.post<ShoppingItem>(
            `/Item/${shoppingListId}/`,
            new ShoppingItem()
        );

        return shoppingItem.data;
    }

    public async UpdateShoppingItem(
        shoppingListId: string,
        shoppingItemId: string,
        shoppingItemDto: CreateUpdateShoppingItemDto
    ) {
        const shoppingItem = await this.axiosClient.put<ShoppingItem>(
            `/Item/${shoppingListId}/${shoppingItemId}`,
            shoppingItemDto
        );

        return shoppingItem.data;
    }
}

export const ShoppingListApiClientInstance = new ShoppingListApiClient();
