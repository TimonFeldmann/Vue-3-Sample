export class TestForm {
    public id: string = "";
    public firstName: string = "";
    public lastName: string = "";


    constructor(testForm: TestForm | null = null) {
        if (testForm !== null) {
            this.id = testForm.id;
            this.firstName = testForm.firstName;
            this.lastName = testForm.lastName;
        }
    }
}
export class TestFormList {
    public testFormItems: TestForm[] = [];
    constructor(testFormList: TestFormList | null = null) {
        if (testFormList !== null) {
            testFormList.testFormItems.forEach((x) => this.AddItem(x));
        }
    }

    public AddItem(item: TestForm) {
        this.testFormItems.push(
            new TestForm({
                firstName: item.firstName,
                lastName: item.lastName,
                id: item.id,
            })
        );
    }
}