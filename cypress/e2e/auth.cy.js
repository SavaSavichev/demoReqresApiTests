/// <reference types="cypress" />

import { AuthApi } from "../support/api/authApi";
import authData from "../fixtures/authData.json";

describe("Auth API tests", () => {
  it("Succesful user login", () => {
    AuthApi.postSuccessfulLogin(authData.successLogin).then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.eql(authData.successResponce);
    });
  });

  it("Unsuccesful user login", () => {
    AuthApi.postUnsuccessfulLogin(authData.unsuccessLogin, false).then(
      (response) => {
        expect(response.status).to.be.eq(400);
        expect(response.body).to.be.eql(authData.unsuccessResponce);
      },
    );
  });
});
