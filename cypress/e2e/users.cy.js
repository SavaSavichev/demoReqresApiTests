/// <reference types="cypress" />

import { UsersApi } from "../support/api/usersApi";
import usersData from "../fixtures/usersData.json";

describe("User API tests", () => {
  it("Get page 1 in list of users", () => {
    UsersApi.getUsers(1)
      .its("body.data")
      .then((data) => {
        expect(data).to.be.eql(usersData.usersPage1);
      });
  });

  it("Get page 2 in list of users", () => {
    UsersApi.getUsers(2)
      .its("body.data")
      .then((data) => {
        expect(data).to.be.eql(usersData.usersPage2);
      });
  });

  it("Get single user by ID", () => {
    UsersApi.getUser(3)
      .its("body.data")
      .then((data) => {
        expect(data).to.be.eql(usersData.user3);
      });
  });

  it("Get non-existent user", () => {
    UsersApi.getUser(25, false).then((response) => {
      expect(response.status).to.be.eq(404);
      expect(response.body).to.be.eql({});
    });
  });

  it("Create user", () => {
    UsersApi.createUser(usersData.newUser).then((response) => {
      expect(response.status).to.be.eq(201);
      expect(response.body).to.include(usersData.newUser);
    });
  });

  it("Update user", () => {
    UsersApi.updateUser(3, usersData.updateUser).then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body).to.include(usersData.updateUser);
    });
  });

  it("Delete user", () => {
    UsersApi.deleteUser(5).then((response) => {
      expect(response.status).to.be.eq(204);
    });
  });
});
