import UserRepository from "./user.repository";

/**
 * Call user repository to fetch authenticated user
 * @returns ApiResponse<User>
 */
export async function finAuthenticateUserData(){
  const repo = new UserRepository()
  const user = await repo.authMe()
  return user
}


/**
 * Get ALL PAGINATED USERS
 */
export async function findPaginatedUsers(page: number, itemsPerPage: number, params?: string[]){
  const repo = new UserRepository()
  return repo.index(page, itemsPerPage, params)
}
