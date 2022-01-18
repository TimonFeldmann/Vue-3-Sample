import {
    ShoppingItem,
    ShoppingList,
    CreateUpdateShoppingItemDto,
} from "@/classes/shopping";
import { User } from "@/classes/user";
import axios, { AxiosInstance } from "axios";

class ShoppingListApiClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: "http://localhost:5200",
            timeout: 10000,
            headers: { "X-Custom-Header": "foobar" },
        });
    }

    public async GetUser(userId): Promise<User> {
        const user = await this.axiosClient.get<User>(`User/${userId}`);

        return user.data;
    }

    public async GetShoppingListForUser(userId: string): Promise<ShoppingList> {
        const shoppingList = await this.axiosClient.get<ShoppingList>(
            `ShoppingList/User/${userId}`
        );

        return shoppingList.data;
    }

    public async CreateShoppingItem(
        shoppingListId: string
    ): Promise<ShoppingItem> {
        const shoppingItem = await this.axiosClient.post<ShoppingItem>(
            `ShoppingList/${shoppingListId}/Item`,
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
            `ShoppingList/${shoppingListId}/Item/${shoppingItemId}`,
            shoppingItemDto
        );

        return shoppingItem.data;
    }
}

export const ShoppingListApiClientInstance = new ShoppingListApiClient();
