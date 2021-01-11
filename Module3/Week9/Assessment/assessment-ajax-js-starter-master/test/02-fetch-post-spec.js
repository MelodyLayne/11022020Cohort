if (typeof AssertionError === 'undefined') {
  var AssertionError = require('assertion-error');
  var chai = require('chai');
  var makeFetch = require('./node-fetch')(1, true);
}

if (typeof expect === 'undefined') {
  expect = chai.expect;
}

describe('POST http://example.com/api/people', () => {
  let jsonSpy;
  let spy;
  let options;
  let error;
  before(async () => {
    const response = new CustomResponse(JSON.stringify(
      {
        people: [
          { id: 1, lastName: 'Zimmerman', firstName: 'Paul' },
          { id: 2, lastName: 'Yimmerman', firstName: 'Raul' },
          { id: 3, lastName: 'Limmerman', firstName: 'Caul' },
          { id: 9, lastName: 'Kimmerman', firstName: 'Maul' },
        ]
      }
    ), {
      status: 200,
      statusText: 'OK',
      headers: new CustomHeaders({
        'Content-Type': 'application/json',
      }),
    });
    jsonSpy = chai.spy.on(response, 'json');

    if (typeof makeFetch !== 'undefined') {
      spy = makeFetch(Promise.resolve(response), (...args) => {
        options = args[1];
      });
    } else {
      spy = chai.spy.on(window, 'fetch', (...args) => {
        options = args[1];
        return Promise.resolve(response);
      });
    }

    if (typeof window === 'undefined') {
      solution = require('../02-fetch-post');
      document = require('./node-dom')('02-fetch-post.js');
    }

    if (typeof addPerson === 'undefined' && typeof solution !== 'undefined') {
      addPerson = solution.addPerson;
    }

    try {
      await addPerson();
    } catch (e) {
      error = e;
    }
  });

  after(() => {
    if (typeof window !== 'undefined') {
      chai.spy.restore(window);
    }
  });

  context('creates a new person', () => {
    it('that you made by using fetch POST with the correct options', async () => {
      if (error) throw error;
      try {
        expect(spy).to.have.been.called.with('http://example.com/api/people');
      } catch (e) {
        throw new AssertionError(`Expected fetch() method to have been called with "http://example.com/api/people"`);
      }
      expect(options).to.have.property('method', 'POST', 'Expected fetch() method to be "POST"');
      expect(options).to.have.property('body');
      expect(JSON.parse(options.body)).to.eql({ firstName: 'Maul', lastName: 'Kimmerman' }, `Expected body of fetch() request to be an object "{ firstName: 'Maul', lastName: 'Kimmerman' }".`);
      try {
        expect(jsonSpy).to.have.been.called.with.exactly();
      } catch (e) {
        throw new AssertionError('Expected json() to have been called on the return value of the fetch()')
      }
    });

    it('and returns the new list of people', async () => {
      if (error) throw error;
      const listItems = document.querySelectorAll('#people-list-02 li');
      expect(listItems.length).to.equal(4, 'There are not exactly four LIs for #people-list');
      expect(listItems[0].innerHTML).to.contain('Zimmerman, Paul', 'Expected the first LI to contain "Zimmerman, Paul"');
      expect(listItems[1].innerHTML).to.contain('Yimmerman, Raul', 'Expected the second LI to contain "Yimmerman, Raul"');
      expect(listItems[2].innerHTML).to.contain('Limmerman, Caul', 'Expected the third LI to contain "Limmerman, Caul"');
      expect(listItems[3].innerHTML).to.contain('Kimmerman, Maul', 'Expected the third LI to contain "Kimmerman, Maul"');
    });
  });
});
