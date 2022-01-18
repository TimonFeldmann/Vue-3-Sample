export class User {
    public id: string = "";
    public name: string = "";

    constructor(userData: User | null = null) {
        if (userData !== null) {
            this.id = userData.id;
            this.name = userData.name;
        }
    }
}
