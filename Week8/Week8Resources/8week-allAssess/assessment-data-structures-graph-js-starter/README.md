# Graph Assessment

In this assessment, you will write a function that allow you to search a graph
using its adjacency list to determine if one node is "connected" to another.

For example, consider the following adjacency list that connects names of people
together:

```js
const adjacencyList = {
  'carrie':  ['humza', 'jun'],
  'farrah':  ['humza'],
  'humza':   ['carrie', 'farrah', 'jun', 'silla'],
  'jun':     ['carrie', 'silla'],
  'ophelia': ['travis'],
  'silla':   ['humza', 'yervand'],
  'travis':  ['ophelia'],
  'ursula':  ['travis'],
  'victor':  [],
  'yervand': ['silla'],
};
```

Your function will take a starting name and an ending name. Your function will
search the graph to determine if you could get from one name to another.

In this function, as is not usually in real life, these interpersonal
relationships are a one-way street. Look at the entry for "ursula". You can find
a path between "ursula" and "ophelia" using "ursula" -> "travis" -> "ophelia".
However, if you were asked to start at "ophelia" and try to get to "ursula",
that would fail because it goes "ophelia" -> "travis" -> _DEAD END_.

Given a start name, an end name, and the adjacency list from above, the
following table shows the result and a possible (not necessarily unique) path
that it could find to determine if two names are connected.

| Start name | End name | Result    | Example path found by a search    |
|------------|----------|-----------|-----------------------------------|
| carrie     | carrie   | true      | carrie (it's the same node)       |
| carrie     | humza    | true      | carrie -> humza                   |
| carrie     | yervand  | true      | carrie -> jun -> silla -> yervand |
| ophelia    | ursula   | **FALSE** | ophelia -> travis -> **FAIL**     |
| travis     | carrie   | **FALSE** | travis -> ophelia -> **FAIL**     |
| ursula     | ophelia  | true      | ursula -> travis -> ophelia       |
| victor     | humza    | **FALSE** | victory -> **FAIL**               |

## Important notes

1. When you do this project, _do not use the mocha command_. Instead, **use the
   npm test command**!
2. Do **NOT** modify the files in the "test" directory. _All_ of your work will
   happen in **01-are-they-connected.js** in this directory.

## Usage

1. Clone the assessment repository from
   https://github.com/appacademy/assessment-data-structures-graph-js-starter.
2. `cd` into the folder and `npm install` to install dependencies
3. **Run the tests by typing `npm test`**. DO NOT USE THE COMMAND `mocha`.
4. Your objective is to implement the code in each of the following JavaScript
   files so that when you run `npm test`, all tests pass.
   * **01-are-they-connected.js** will contain your implementation of the
     search algorithm.

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it
