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
├── e2e/ # All test cases
│ ├── auth.cy.js
│ ├── register.cy.js
│ └── users.cy.js
├── fixtures/ # Test data (JSON)
│ ├── authData.json
│ ├── regData.json
│ └── usersData.json
├── support/
│ └── api/ # API-layer abstraction (Service Object)
│ ├── authApi.js
│ ├── regApi.js
│ └── usersApi.js
│ └── apiConfig.js
└──

## Technology Stack

- **Cypress** (JavaScript-based end-to-end testing framework)
- **Mocha** & **Chai** (assertion engine)
- **Reqres.in** as API sandbox
- **JSON Fixtures** for test data
- **Modular API design** via service/helper classes

## How to Run Tests

1. Clone the repository:
   ```bash
   git clone https://github.com/SavaSavichev/demoReqresApiTests.git
   cd demoReqresApiTests
   Install dependencies:
   ```

bash
Copy
Edit
npm install
Open Cypress UI:

bash
Copy
Edit
npx cypress open
Or run tests in headless mode:

bash
Copy
Edit
npx cypress run
Notes
All tests use a shared base URL and API key set via apiConfig.js

failOnStatusCode: false is used in negative tests to handle expected error responses

The project avoids hardcoding where possible and follows best practices for reusability and readability

Thank you for your attention!
