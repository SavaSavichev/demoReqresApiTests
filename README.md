# ReqRes API Tests with Cypress

This project is a demonstration of automated API testing using [Cypress](https://www.cypress.io/) and the public API [reqres.in](https://reqres.in).  
It is structured as a real-world test automation project, showcasing best practices such as service-based API wrappers, test data separation, and validation of both positive and negative scenarios.

## Covered Test Scenarios

- **GET** list of users
- **GET** single user (existing and non-existing)
- **POST** create user
- **PUT** update user
- **DELETE** remove user
- **POST** login with valid and invalid credentials
- **POST** register user (success and failure)
- **Negative cases**:
  - Missing fields
  - 404 not found
  - Invalid login or registration
- **Full user lifecycle (CRUD)**:
  - Create → Update → Delete in a single test flow

## Project Structure

cypress/
├── e2e/                     # All test cases
│   ├── auth.cy.js
│   ├── register.cy.js
│   └── users.cy.js
├── fixtures/                # Test data (JSON)
│   ├── authData.json
│   ├── regData.json
│   └── usersData.json
├── support/
│   └── api/                 # API-layer abstraction (Service Object)
│       ├── authApi.js
│       ├── regApi.js
│       ├── usersApi.js
│       └── apiConfig.js

## Technology Stack

- **Cypress** (JavaScript-based end-to-end testing framework)
- **Mocha** & **Chai** (assertion engine)
- **Reqres.in** as API sandbox
- **JSON Fixtures** for test data
- **Modular API design** via service/helper classes

## Quick start

### 1. Clone the repository

```bash
git clone https://github.com/SavaSavichev/demoReqresApiTests.git
cd demoWebShopJS
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Cypress tests

To open Cypress Test Runner (interactive mode):

```bash
npx cypress open
```

To run tests in headless mode (without UI):

```bash
npx cypress run
```

---

Thank you for your attention!