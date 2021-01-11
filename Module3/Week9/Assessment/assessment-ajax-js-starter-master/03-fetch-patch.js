if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}
if (!document) {
  const createDom = require('./test/node-dom');
  var document = createDom(__filename);
}

/**
 * Do not change code above this line.
 *
 * INSTRUCTIONS:
 *
 * Implement an updatePerson method that performs the following:
 *
 * 1. Awaits for the response to a PATCH call to fetch() for the URL
 *    'http://example.com/api/people/3' with the body set to the JSON
 *    stringified version of the object:
 *
 *    { lastName: 'Ball' }
 *
 * 2. Awaits the json() method on the response to get the data from the API
 *    call. The object returned from the json() call will be the following
 *    object.
 *
 *    {
 *      id: 3,
 *      lastName: 'Ball',
 *      firstName: 'Caul'
 *    }
 *
 * 3. Gets the element #person-3 and updates the element's content to the new
 *    last name so that the inner HTML is "Ball, Caul".
 *
 *
 * Hints:
 *   * If you're using npm test and want to see what's happening with your DOM,
 *     use console.log(document.body.innerHTML) to see what's happening, if you
 *     need to.
 ******************************************************************************/

async function updatePerson() {
  const body = JSON.stringify({ lastName: 'Ball' });
  const response = await fetch('http://example.com/api/people/3', { method: 'PATCH', body });;
  const json = await response.json();
  const person = json;
  const li = document.getElementById('person-3');
  li.innerHTML = `${person.lastName}, ${person.firstName}`;
}





/*******************************************************************************
 * Do not change code below this line.
 */
if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.updatePerson = updatePerson;
  } catch (e) {
    exports.updatePerson = () => {throw new Error('Cannot export updatePerson')};
  }
})(exports);
