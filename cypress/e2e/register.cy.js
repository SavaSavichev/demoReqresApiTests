/// <reference types="cypress" />

import { RegApi } from "../support/api/regApi";
import regData from "../fixtures/regData.json";

describe("Register API tests", () => {
  it("Succesful user register", () => {
    RegApi.postSuccessfulRegister(regData.successfulUser).then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.eql(regData.successfulResponse);
    });
  });

  it("Unsuccesful user register", () => {
    RegApi.postUnsuccessfulRegister(regData.unsuccessfulUser, false).then(
      (response) => {
        expect(response.status).to.be.eq(400);
        expect(response.body).to.be.eql(regData.unsuccessfulResponse);
      },
    );
  });
});
