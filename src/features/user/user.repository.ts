import AbstractCrudRepository from "../app/abstract_crud.repository";
import { User } from "./user.models";
import { fetchApi } from "../app/fetch_functions";
import { UserFormValues } from "./user.validators";

export default class UserRepository extends AbstractCrudRepository<User, UserFormValues>{
    constructor() {
        super("users", "users");
    }

    async authMe(){
        const user = await fetchApi<User>(`auth/me`,  {
            method: "GET",
        }, "")
        return user
    }
}