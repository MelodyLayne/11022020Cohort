### W8D3
### Graphs

---

### Agenda

* Graph Terminology Slides
* Graph Introduction Video w/ God King Alvin
* Graph Implementation code demo

---

#### Vertex || Node - point on a graph that holds a name or value

![Vertices](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/6n-graf.svg/1200px-6n-graf.svg.png)

source: wikimedia.org

---

#### Edge || Link - a line or arc between two vertices

![Edges](https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png)

source: geeksforgeeks.org

---

#### Weighted Graph - a weight or cost is associated with an edge

![Weighted Graph](https://zytools.zybooks.com/zyAuthor/DiscreteMath/25/IMAGES/embedded_image631dlA2bWxfUcxrFTcOic5s8ihoKMqUyEvIoS5dJtw-GPk_10_Bs2ItdkpPk.png)

source: zytools.com

---

#### Complete || Connected Graph - there is an edge from a vertex to any other vertex
#### Dense Graph - edge count is > V
#### Sparse Graph - edge count is <= V

![Dense v Sparse](https://inviqa.com/sites/default/files/inline-images/edges.png)

source: inviqa.com

---

#### Directed Graph || Digraph - edges on a digraph have a specified direction
#### Undirected || Unordered || Graph - edges do not have a specified direction
#### If not specified, all graphs are assumed to be undirected

![Directed v Undirected](https://www.researchgate.net/profile/Debojoti_Kuzur/publication/282653028/figure/fig2/AS:282176378687493@1444287499817/Directed-and-Undirected-graph-Ref-7.png)

source: researchgate.net

---

#### Path - sequence of vertices on a graph

![Path](https://ucarecdn.com/a67cb888-aa0c-424b-8c7f-847e38dd5691/)

source: ucarecdn.com

---

#### Cycle - a path where a starting vertex is also the ending vertex

![Cycle](https://www.gatevidyalay.com/wp-content/uploads/2018/06/Cycle-Graph-Examples.png)

source: gatevidyalay.com

---

### Video w/ Alvin

---

#### JS Set

* Set objects are collections of values. 
* A value in the Set may only occur once.

#### Methods You Need For Today

* mySet.add(value) - append an item onto a set
* mySet.has(value) - returns a boolean if a value is included in the set

```js
const s = new Set();
s.add(1);
s.has(1); // true
s.has(2); // false
```

---

### Graph Implementation Code Demo

