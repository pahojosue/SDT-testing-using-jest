# Password Strength Validator (TDD Demo)

A lightweight Node.js utility built to demonstrate **Test-Driven Development (TDD)** principles using Jest. This project was developed to showcase the Red-Green-Refactor cycle and includes a complete unit testing suite with code coverage reporting.

## 🚀 Features

* **TDD Methodology:** Developed strictly using the Red-Green-Refactor cycle.
* **Password Validation Rules:**
    * Minimum length of 8 characters.
    * Must contain at least one numeric digit.
    * Must contain at least one special character.
* **Comprehensive Testing:** 100% statement, branch, function, and line coverage using Jest.

## 🛠️ Prerequisites

To run this project, you will need:
* [Node.js](https://nodejs.org/) installed on your machine.
* npm (comes with Node.js).

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate into the project directory:
   ```bash
   cd tdd-password-validator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## 🧪 Testing and Coverage

This project uses [Jest](https://jestjs.io/) for unit testing. 

To run the standard test suite:
```bash
npm test
```

**To generate and view the coverage report:**
```bash
npm run test:coverage
```
*Note: Running the coverage command will generate a `coverage/` directory. Open `coverage/lcov-report/index.html` in your browser to view the detailed, interactive coverage breakdown.*

## 📂 Project Structure

```text
├── passwordValidator.js       # The main implementation file
├── passwordValidator.test.js  # The Jest test suite
├── package.json               # Project metadata and scripts
└── README.md                  # Project documentation
```

## 🧠 The TDD Cycle Implemented

This utility was built following these steps:
1.  **Red:** Wrote failing tests in `passwordValidator.test.js` defining the password rules before writing any application logic.
2.  **Green:** Wrote the minimum required code in `passwordValidator.js` to make the tests pass.
3.  **Refactor:** Cleaned and optimized the implementation without breaking the existing tests.

---
**Author:** PAHO TCHAPTCHET JOSUE SHEKINA