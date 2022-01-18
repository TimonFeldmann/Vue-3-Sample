import { User } from "@/classes/user";
import { ShoppingListApiClientInstance } from "@/api/shoppingListAxiosClient";
import { defineStore } from "pinia";

export const userStore = defineStore("user", {
    state: () => ({
        userState: new User(),
    }),
    getters: {
        user(): User {
            return this.userState;
        },
        name(): string {
            return this.user.name;
        },
    },
    actions: {
        async getUser(id: string) {
            const user = await ShoppingListApiClientInstance.GetUser(id);

            this.setUser(user);
        },
        setUser(user: User) {
            this.userState = new User(user);
        },
    },
});
