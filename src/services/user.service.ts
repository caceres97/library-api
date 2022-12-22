import { Service } from "typedi";
import { UserI } from "../models/user.model";

@Service()
class UserService {
    constructor(private readonly userModel: UserI) {}

    async User(): Promise<UserI[]> {
        return []
    }

    async createUser(): Promise<UserI[]> {
        return []
    }
}
 
export default UserService;