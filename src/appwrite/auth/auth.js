import { Client, Account, ID } from "appwrite";
import conf from "/src/conf/conf.js";


//by using this class method to define our auth service, we can easily switch to another auth service in the future just by changing the implementation of this class

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call the login function
                const loginData = this.login({ email, password });
                return loginData;
                //user will be logged in after creating the account
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("AuthService -> createAccount -> error", error)
        }
    }

    async login({ email, password }) {
        try {
            const userAccount = await this.account.createEmailSession(email, password);
            return userAccount;
        } catch (error) {
            console.log("AuthService -> login -> error", error)
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.log("AuthService -> getCurrentUser -> error", error)
        }
        return null;
    }

    async logout() {
        try {
            // const user = await this.account.deleteSessions("current");
            // this will delete all the sessions
            const user = await this.account.deleteSession("current");
            //detete the current session
            return user;
        } catch (error) {
            console.log("AuthService -> logout -> error", error)
        }
    }

}
const authService = new AuthService();

export default authService;