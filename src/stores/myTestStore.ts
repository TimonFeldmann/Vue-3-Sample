import { TestForm, TestFormList } from "@/classes/testForm";
import { defineStore } from "pinia";

export const shoppingStore = defineStore("myTestStore", {
    state: () => ({
        testFormList: new TestFormList(),
        isLoading: new Boolean()
    }),
    getters: {
        testFormItems(): TestForm[] {
            return this.testFormList.testFormItems;
        },
    },
    actions: {
        async addNewFormEntry(testFormItem: TestForm) {
            this.isLoading = true;
            //YOU WOULD NORMALLY MAKE AN API CALL HERE! BUT FOR MOCKING PURPOSES LET'S JUST WAIT A SECOND
            setTimeout(() => {this.testFormList.AddItem(testFormItem)}, 1000);
            this.isLoading = false;
        },
    }
});