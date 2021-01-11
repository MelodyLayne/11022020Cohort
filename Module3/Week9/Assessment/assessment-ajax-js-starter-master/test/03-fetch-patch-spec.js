if (typeof AssertionError === 'undefined') {
  var AssertionError = require('assertion-error');
  var chai = require('chai');
  var makeFetch = require('./node-fetch')(1, true);
}

if (typeof expect === 'undefined') {
  expect = chai.expect;
}

describe('PATCH http://example.com/api/people/3', () => {
  let jsonSpy;
  let spy;
  let options;
  let error;
  before(async () => {
    const response = new CustomResponse(JSON.stringify(
      {
        id: 3,
        lastName: 'Ball',
        firstName: 'Caul'
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
      solution = require('../03-fetch-patch');
      document = require('./node-dom')('03-fetch-patch.js');
    }

    if (typeof updatePerson === 'undefined' && typeof solution !== 'undefined') {
      updatePerson = solution.updatePerson;
    }

    try {
      await updatePerson();
    } catch (e) {
      error = e;
    }
  });

  after(() => {
    if (typeof window !== 'undefined') {
      chai.spy.restore(window);
    }
  });

  context('updates the existing data on the server', () => {
    it('that you updated by using fetch PATCH with the correct options', () => {
      if (error) throw error;
      try {
        expect(spy).to.have.been.called.with('http://example.com/api/people/3');
      } catch(e) {
        throw new AssertionError(`Expected fetch() method to have been called with "http://example.com/api/people/3"`);
      }
      expect(options).to.have.property('method', 'PATCH', 'Expected fetch() method to be "PATCH"');
      expect(options).to.have.property('body');
      expect(JSON.parse(options.body)).to.eql({ lastName: 'Ball' }, `Expected body of fetch() request to be an object "{ lastName: 'Ball' }".`);
      try {
        expect(jsonSpy).to.have.been.called.with.exactly();
      } catch (e) {
        throw new AssertionError('Expected json() to have been called on the return value of the fetch()')
      }
    });

    it('and updates the associated list item on success', async () => {
      if (error) throw error;
      const listItems = document.querySelectorAll('#people-list-03 li');
      expect(listItems.length).to.equal(4, 'There are not exactly four LIs for #people-list');
      expect(listItems[0].innerHTML).to.contain('Zimmerman, Paul', 'Expected the first LI to contain "Zimmerman, Paul"');
      expect(listItems[1].innerHTML).to.contain('Yimmerman, Raul', 'Expected the second LI to contain "Yimmerman, Raul"');
      expect(listItems[2].innerHTML).to.contain('Ball, Caul', 'Expected the third LI to contain "Ball, Caul"');
      expect(listItems[3].innerHTML).to.contain('Kimmerman, Maul', 'Expected the third LI to contain "Kimmerman, Maul"');
    });
  });
});
