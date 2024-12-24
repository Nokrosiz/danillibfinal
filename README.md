# **DanilLib**

DanilLib is a lightweight utility library designed to simplify working with person objects. It provides essential functions like `getAge`, `getName`, `getProfession`, and more to extract and manage data effectively.

---

## **Installation**

Install the library via npm:

```bash
npm install danillib
```

## **Installation**

Install the library via npm:

```bash
npm install danillib
```

---

## **Usage**

Import the library into your project and start using its functions:

### **Example:**
```javascript
const { getAge, getName, getProfession, getPersonSummary } = require('danillib');

// Example person object
const person = {
  name: 'Daniil',
  age: 25,
  profession: 'Software Developer',
};

console.log(getAge(person)); // Output: 25
console.log(getName(person)); // Output: Daniil
console.log(getProfession(person)); // Output: Software Developer
console.log(getPersonSummary(person)); 
// Output: Daniil is 25 years old and works as a Software Developer.
```

---

## **API Documentation**

### **1. `getAge(person)`**
- **Description:** Returns the age of the provided person.
- **Parameters:**
  - `person` *(Object)*: An object containing the `age` property.
- **Returns:** `number` - The age of the person.
- **Throws:** Error if the `age` property is missing.

### **2. `getName(person)`**
- **Description:** Returns the name of the provided person.
- **Parameters:**
  - `person` *(Object)*: An object containing the `name` property.
- **Returns:** `string` - The name of the person.
- **Throws:** Error if the `name` property is missing.

### **3. `getProfession(person)`**
- **Description:** Returns the profession of the provided person.
- **Parameters:**
  - `person` *(Object)*: An object containing the `profession` property.
- **Returns:** `string` - The profession of the person.
- **Throws:** Error if the `profession` property is missing.

### **4. `getPersonSummary(person)`**
- **Description:** Returns a summary string combining the name, age, and profession of the person.
- **Parameters:**
  - `person` *(Object)*: An object containing `name`, `age`, and `profession` properties.
- **Returns:** `string` - A summary of the person's details.

---

## **Keywords**
- Utility
- Person
- JavaScript
- Data Extraction
- npm-package
- lodash
- danillib

---

## **License**

This project is licensed under the **ISC License**. See the [LICENSE](https://opensource.org/licenses/ISC) file for details.

---

## **Repository**

Find the source code on GitHub: [danillib](https://github.com/DaniilKarimov/danillib)

---

## **Author**

**Daniil Karimov**  
Feel free to reach out for questions or suggestions!

---

## **Contributing**

Contributions are welcome!  
1. Fork the repository.
2. Create a new branch (`feature/my-new-feature`).
3. Commit your changes.
4. Push the branch and open a pull request.

---

If you encounter any issues or have feature requests, please submit them via the [GitHub Issues](https://github.com/DaniilKarimov/danillib/issues) page.
```

---

### Added at the Beginning:
- **Library Name:** "DanilLib".
- **Description:** Explains what the library is and what it offers.

Let me know if there's anything else to add!