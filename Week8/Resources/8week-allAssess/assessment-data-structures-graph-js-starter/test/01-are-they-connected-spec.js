const { expect } = require('chai');
const names = Array.from(require('./names'));

let areTheyConnected = () => {
  throw new Error('Could not load areTheyConnected');
};

try {
  ({ areTheyConnected } = require('../01-are-they-connected'));
} catch (e) {}

function randomNamesIndex() {
  return Math.floor(Math.random() * names.length);
}

function randomName(not) {
  if (!Array.isArray(not)) not = [not];
  let name = names[randomNamesIndex()];
  while (not.includes(name)) {
    name = names[randomNamesIndex()];
  }
  return name;
}

describe('areTheyConnected()', () => {
  context('returns false when', () => {
    it('the list of people for startName is empty', () => {
      const startName = randomName();
      const endName = randomName(startName);
      const adjacencyList = { [startName]: [], [endName]: [startName] };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.false;
    });

    it('the entry for startName points to other nodes that are empty', () => {
      const upperBound = randomNamesIndex() % 20;
      const adjacencyList = {};
      const otherNames = [];
      for (let i = 0; i < upperBound; i += 1) {
        const otherName = randomName([otherNames]);
        otherNames.push(otherName);
        adjacencyList[otherName] = [];
      }
      const startName = randomName(otherNames);
      adjacencyList[startName] = otherNames;
      const endName = randomName([startName, ...otherNames]);
      adjacencyList[endName] = [startName, ...otherNames];

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.false;
    });

    it('the entry for startName points a long path that never finds endName', () => {
      const adjacencyList = {};
      let startName;
      const endName = randomName();
      for (let i = 0; i < names.length; i += 1) {
        const name = names[i];
        const nextName = names[(i + 1) % names.length];
        if (nextName === endName) {
          adjacencyList[name] = [];
        } else {
          adjacencyList[name] = [nextName];
        }
        if (name === endName) {
          startName = nextName;
        }
      }
      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.false;
    });
  });

  context('returns true when', () => {
    it('startName === endName', () => {
      const startName = randomName();
      const endName = startName;
      const adjacencyList = { [startName]: [] };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> endName', () => {
      const startName = randomName();
      const endName = randomName(startName);
      const adjacencyList = { [startName]: [endName], [endName]: [] };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> endName despite a cycle', () => {
      const startName = randomName();
      const endName = randomName(startName);
      const adjacencyList = { [startName]: [endName], [endName]: [startName] };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> endName', () => {
      const startName = randomName();
      const endName = randomName(startName);
      const otherName = randomName([startName, endName]);
      const adjacencyList = {
        [startName]: [otherName],
        [otherName]: [endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> endName despite of a cycle', () => {
      const startName = randomName();
      const endName = randomName(startName);
      const otherName = randomName([startName, endName]);
      const adjacencyList = {
        [startName]: [otherName],
        [otherName]: [startName, endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> another -> endName', () => {
      const startName = randomName();
      const endName = randomName(startName);
      const otherName = randomName([startName, endName]);
      const anotherName = randomName([startName, otherName, endName]);
      const adjacencyList = {
        [startName]: [otherName],
        [otherName]: [anotherName],
        [anotherName]: [endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('it finds the path startName -> other -> another -> endName despite many cycles', () => {
      const startName = randomName();
      const endName = randomName(startName);
      const otherName = randomName([startName, endName]);
      const anotherName = randomName([startName, otherName, endName]);
      const adjacencyList = {
        [startName]: [otherName],
        [otherName]: [startName, anotherName],
        [anotherName]: [startName, otherName, endName],
        [endName]: [otherName, startName]
      };

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('the finds the path startName -> all other names -> endName', () => {
      const adjacencyList = {};
      let startName;
      const endName = randomName();
      for (let i = 0; i < names.length; i += 1) {
        const name = names[i];
        const nextName = names[(i + 1) % names.length];
        adjacencyList[name] = [nextName];
        if (name === endName) {
          startName = nextName;
        }
      }

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('the finds the path startName -> all other names -> endName despite cycles', () => {
      const adjacencyList = {};
      let startName;
      let nameAfterStartName;
      const endName = randomName();
      for (let i = 0; i < names.length; i += 1) {
        const name = names[i];
        const previousName = names[(names.length + i - 1) % names.length];
        const nextName = names[(i + 1) % names.length];
        adjacencyList[name] = [previousName, nextName];
        if (name === endName) {
          startName = nextName;
          nameAfterStartName = names[(i + 2) % names.length];
        }
      }
      adjacencyList[startName] = [nameAfterStartName];

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });

    it('the finds the path in a fully connected graph without timing out', () => {
      const adjacencyList = {};
      for (let i = 0; i < names.length; i += 1) {
        adjacencyList[names[i]] = [...names];
      }
      const startName = randomName();
      endName = names[names.length - 1];

      const result = areTheyConnected(adjacencyList, startName, endName);

      expect(result).to.be.true;
    });
  });
});
