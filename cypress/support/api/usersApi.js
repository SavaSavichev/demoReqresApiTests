import { BASE_URL, getHeaders } from "./apiConfig";

export class UsersApi {
  static getUsers(page = 1) {
    return cy.request({
      method: "GET",
      url: `${BASE_URL}/users?page=${page}`,
      headers: getHeaders(),
    });
  }

  static getUser(id, failOnStatusCode = true) {
    return cy.request({
      method: "GET",
      url: `${BASE_URL}/users/${id}`,
      headers: getHeaders(),
      failOnStatusCode,
    });
  }

  static createUser(data) {
    return cy.request({
      method: "POST",
      url: `${BASE_URL}/users`,
      headers: getHeaders(),
      body: data,
    });
  }

  static updateUser(id, data) {
    return cy.request({
      method: "PUT",
      url: `${BASE_URL}/users/${id}`,
      headers: getHeaders(),
      body: data,
    });
  }

  static deleteUser(id) {
    return cy.request({
      method: "DELETE",
      url: `${BASE_URL}/users/${id}`,
      headers: getHeaders(),
    });
  }

  static loginUser(data, failOnStatusCode = true) {
    return cy.request({
      method: "POST",
      url: `${BASE_URL}/login`,
      headers: getHeaders(),
      failOnStatusCode,
      body: data,
    });
  }
}
