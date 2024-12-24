/**
 * Utility function to get the age of a person.
 * @param {Object} person - The person object.
 * @returns {number} - The age of the person.
 */
function getAge(person) {
    if (!person || !person.age) {
      throw new Error("Invalid person object: 'age' is required");
    }
    return person.age;
  }
  
  /**
   * Utility function to get the name of a person.
   * @param {Object} person - The person object.
   * @returns {string} - The name of the person.
   */
  function getName(person) {
    if (!person || !person.name) {
      throw new Error("Invalid person object: 'name' is required");
    }
    return person.name;
  }
  
  /**
   * Utility function to get the profession of a person.
   * @param {Object} person - The person object.
   * @returns {string} - The profession of the person.
   */
  function getProfession(person) {
    if (!person || !person.profession) {
      throw new Error("Invalid person object: 'profession' is required");
    }
    return person.profession;
  }
  
  /**
   * Utility function to summarize a person's details.
   * @param {Object} person - The person object.
   * @returns {string} - A summary string of the person's details.
   */
  function getPersonSummary(person) {
    const name = getName(person);
    const age = getAge(person);
    const profession = getProfession(person);
  
    return `${name} is ${age} years old and works as a ${profession}.`;
  }
  
  module.exports = {
    getAge,
    getName,
    getProfession,
    getPersonSummary,
  };
  