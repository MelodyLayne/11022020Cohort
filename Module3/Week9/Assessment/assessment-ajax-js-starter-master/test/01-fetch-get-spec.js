if (typeof AssertionError === 'undefined') {
  var AssertionError = require('assertion-error');
  var chai = require('chai');
  var makeFetch = require('./node-fetch')(1, true);
  var CustomResponse = require('./response').Response;
  var CustomHeaders = require('./response').Headers;
}

if (typeof expect === 'undefined') {
  expect = chai.expect;
}

describe('GET http://example.com/api/people', () => {
  let jsonSpy;
  let spy;
  let error;
  before(async () => {
    const response = new CustomResponse(JSON.stringify(
      {
        people: [
          { id: 1, lastName: 'Zimmerman', firstName: 'Paul' },
          { id: 2, lastName: 'Yimmerman', firstName: 'Raul' },
          { id: 3, lastName: 'Limmerman', firstName: 'Caul' },
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
      spy = makeFetch(Promise.resolve(response));
    } else {
      spy = chai.spy.on(window, 'fetch', (...args) => {
        return Promise.resolve(response);
      });
    }

    if (typeof window === 'undefined') {
      solution = require('../01-fetch-get');
      document = require('./node-dom')('01-fetch-get.js');
    }

    if (typeof getPeople === 'undefined' && typeof solution !== 'undefined') {
      getPeople = solution.getPeople;
    }

    try {
      await getPeople();
    } catch (e) {
      error = e;
    }
  });

  after(() => {
    if (typeof window !== 'undefined') {
      chai.spy.restore(window);
    }
  });

  context('returns a list of three people', () => {
    it('that you got from using fetch GET', async () => {
      if (error) throw error;
      try {
        expect(spy).to.have.been.called.with('http://example.com/api/people');
      } catch (e) {
        throw new AssertionError('Expected fetch() method to have been called with "http://example.com/api/people"')
      }
      try {
        expect(jsonSpy).to.have.been.called.with.exactly();
      } catch (e) {
        throw new AssertionError('Expected json() to have been called on the return value of the fetch()')
      }
    });

    it('that you use to build list items for #people-list', async () => {
      if (error) throw error;
      const listItems = document.querySelectorAll('#people-list-01 li');
      expect(listItems.length).to.equal(3, 'There are not exactly three LIs for #people-list');
      expect(listItems[0].innerHTML).to.contain('Zimmerman, Paul', 'Expected the first LI to contain "Zimmerman, Paul"');
      expect(listItems[1].innerHTML).to.contain('Yimmerman, Raul', 'Expected the second LI to contain "Yimmerman, Raul"');
      expect(listItems[2].innerHTML).to.contain('Limmerman, Caul', 'Expected the third LI to contain "Limmerman, Caul"');
    });
  });
});
