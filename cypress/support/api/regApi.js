import { BASE_URL, getHeaders } from "./apiConfig";

export class RegApi {
  static postSuccessfulRegister(data) {
    return cy.request({
      method: "POST",
      url: `${BASE_URL}/register`,
      headers: getHeaders(),
      body: data,
    });
  }

  static postUnsuccessfulRegister(data, failOnStatusCode = true) {
    return cy.request({
      method: "POST",
      url: `${BASE_URL}/register`,
      headers: getHeaders(),
      body: data,
      failOnStatusCode,
    });
  }
}
