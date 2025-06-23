import { BASE_URL, getHeaders } from "./apiConfig";

export class AuthApi {
  static postSuccessfulLogin(data) {
    return cy.request({
      method: "POST",
      url: `${BASE_URL}/login`,
      headers: getHeaders(),
      body: data,
    });
  }

  static postUnsuccessfulLogin(data, failOnStatusCode = true) {
    return cy.request({
      method: "POST",
      url: `${BASE_URL}/login`,
      headers: getHeaders(),
      body: data,
      failOnStatusCode,
    });
  }
}
