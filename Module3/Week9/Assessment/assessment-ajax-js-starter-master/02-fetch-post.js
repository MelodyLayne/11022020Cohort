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
 * Implement an addPerson method that performs the following:
 *
 * 1. Awaits for the response to a POST call to fetch() for the URL
 *    'http://example.com/api/people' with the JSON stringified version of the
 *    object:
 *
 *    { firstName: 'Maul', lastName: 'Kimmerman' }
 *
 * 2. Awaits the json() method on the response to get the data from the API
 *    call. The object returned from the json() call will be the following
 *    object.
 *
 *    {
 *      people: [
 *        { id: 1, lastName: 'Zimmerman', firstName: 'Paul' },
 *        { id: 2, lastName: 'Yimmerman', firstName: 'Raul' },
 *        { id: 3, lastName: 'Limmerman', firstName: 'Caul' },
 *        { id: 9, lastName: 'Kimmerman', firstName: 'Maul' },
 *      ]
 *    }
 *
 * 3. Gets the element #people-list-02 using the document object.
 * 4. For each entry in the people array in the object received by line 2:
 *      * Create a new LI element
 *      * Set the inner HTML of the LI element to "lastName, firstName" for
 *        each person in the array
 *      * Append the LI as a child to the list selected in step 3.
 *
 *    The #people-list-02 should have four LI elements after running the
 *    addPerson function, and they should be
 *
 *      <li>Zimmerman, Paul</li>
 *      <li>Yimmerman, Raul</li>
 *      <li>Limmerman, Caul</li>
 *      <li>Kimmerman, Maul</li>
 *
 *
 * Hints:
 *   * If you're using npm test and want to see what's happening with your DOM,
 *     use console.log(document.body.innerHTML) to see what's happening, if you
 *     need to.
 ******************************************************************************/

async function addPerson() {
  const body = JSON.stringify({ firstName: 'Maul', lastName: 'Kimmerman' });
	const response = await fetch('http://example.com/api/people', { method: 'POST', body });
	const json = await response.json();
	const { people } = json;
	const list = document.getElementById('people-list-02');

	for (let person of people) {
		const li = document.createElement('li');
		li.innerHTML = `${person.lastName}, ${person.firstName}`;
		list.appendChild(li);
	}
}





/*******************************************************************************
 * Do not change code below this line.
 */
if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.addPerson = addPerson;
  } catch (e) {
    exports.addPerson = () => {throw new Error('Cannot export addPerson')};
  }
})(exports);
