import { fetchApi, fetchPaginatedData } from "./fetch_functions";

export default class AbstractCrudRepository<T, U, P = any> {
  protected endpoint: string;
  protected cacheKey: string;

  constructor(endpoint: string, cacheKey: string) {
    this.endpoint = endpoint;
    this.cacheKey = cacheKey;
  }

  async index(page: number, itemsPerPage: number, params?: string[]) {
    return await fetchPaginatedData<P>(
      `${this.endpoint}`,
      this.cacheKey,
      page,
      itemsPerPage,
      params
    );
  }

  async create(data: U) {
    let headers = {};
    if (!(data instanceof FormData)) {
      headers = { "Content-Type": "application/json" };
    }
    return await fetchApi<T>(
      this.endpoint,
      {
        method: "POST",
        headers: headers,
        body: data instanceof FormData ? data : JSON.stringify(data),
      },
      [this.cacheKey]
    );
  }

  async update(data: Partial<U>, id: any) {
    let headers = {};
    if (!(data instanceof FormData)) {
      headers = { "Content-Type": "application/json" };
    }
    return await fetchApi<T>(
      `${this.endpoint}/${id}`,
      {
        method: "PATCH",
        headers: headers,
        body: data instanceof FormData ? data : JSON.stringify(data),
      },
      [this.cacheKey, `${this.cacheKey}-${id}`]
    );
  }

  async delete(id: any) {
    return await fetchApi<T>(
      `${this.endpoint}/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      },
      [this.cacheKey]
    );
  }

  async getById(id: any) {
    return await fetchApi<T>(`${this.endpoint}/${id}`, {
      method: "GET",
      next: { tags: [`${this.cacheKey}-${id}`] },
    });
  }
}
