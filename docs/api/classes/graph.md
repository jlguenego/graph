[@jlguenego/graph](../README.md) / [Exports](../modules.md) / Graph

# Class: Graph<T\>

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Constructors

- [constructor](graph.md#constructor)

### Properties

- [edges](graph.md#edges)
- [nodeset](graph.md#nodeset)

### Accessors

- [size](graph.md#size)

### Methods

- [equals](graph.md#equals)
- [getBaseNodes](graph.md#getbasenodes)
- [getBijectionWith](graph.md#getbijectionwith)
- [getInDegree](graph.md#getindegree)
- [getLeaves](graph.md#getleaves)
- [getOutDegree](graph.md#getoutdegree)
- [getPathBetween](graph.md#getpathbetween)
- [getPredecessors](graph.md#getpredecessors)
- [getSuccessorPaths](graph.md#getsuccessorpaths)
- [getSuccessors](graph.md#getsuccessors)
- [hasCycle](graph.md#hascycle)
- [isDAG](graph.md#isdag)
- [isStronglyConnected](graph.md#isstronglyconnected)

## Constructors

### constructor

\+ **new Graph**<T\>(`nodeset`: *Set*<T\>, `relation`: *RelationOn*<T\>): [*Graph*](graph.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`nodeset` | *Set*<T\> |
`relation` | *RelationOn*<T\> |

**Returns:** [*Graph*](graph.md)<T\>

Defined in: [Graph.ts:9](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L9)

## Properties

### edges

• **edges**: *Set*<OrderedPair<T, T\>\>

Defined in: [Graph.ts:5](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L5)

___

### nodeset

• **nodeset**: *Set*<T\>

## Accessors

### size

• get **size**(): *number*

**Returns:** *number*

Defined in: [Graph.ts:7](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L7)

## Methods

### equals

▸ **equals**<U\>(`graph`: [*Graph*](graph.md)<U\>): *boolean*

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`graph` | [*Graph*](graph.md)<U\> |

**Returns:** *boolean*

Defined in: [Graph.ts:63](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L63)

___

### getBaseNodes

▸ **getBaseNodes**(): *Set*<T\>

**Returns:** *Set*<T\>

Defined in: [Graph.ts:130](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L130)

___

### getBijectionWith

▸ **getBijectionWith**<U\>(`graph`: [*Graph*](graph.md)<U\>): *undefined* \| [*Bijection*](bijection.md)<T, U\>

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`graph` | [*Graph*](graph.md)<U\> |

**Returns:** *undefined* \| [*Bijection*](bijection.md)<T, U\>

Defined in: [Graph.ts:41](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L41)

___

### getInDegree

▸ **getInDegree**(`a`: T): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |

**Returns:** *number*

Defined in: [Graph.ts:33](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L33)

___

### getLeaves

▸ **getLeaves**(): *Set*<T\>

**Returns:** *Set*<T\>

Defined in: [Graph.ts:134](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L134)

___

### getOutDegree

▸ **getOutDegree**(`a`: T): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |

**Returns:** *number*

Defined in: [Graph.ts:37](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L37)

___

### getPathBetween

▸ **getPathBetween**(`a`: T, `b`: T): *undefined* \| T[]

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |
`b` | T |

**Returns:** *undefined* \| T[]

Defined in: [Graph.ts:67](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L67)

___

### getPredecessors

▸ **getPredecessors**(`a`: T): *IterableIterator*<T\>

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |

**Returns:** *IterableIterator*<T\>

Defined in: [Graph.ts:15](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L15)

___

### getSuccessorPaths

▸ **getSuccessorPaths**(`a`: T, `level`: *number*): *Set*<T[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |
`level` | *number* |

**Returns:** *Set*<T[]\>

Defined in: [Graph.ts:88](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L88)

___

### getSuccessors

▸ **getSuccessors**(`a`: T): *IterableIterator*<T\>

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |

**Returns:** *IterableIterator*<T\>

Defined in: [Graph.ts:24](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L24)

___

### hasCycle

▸ **hasCycle**(): *boolean*

**Returns:** *boolean*

Defined in: [Graph.ts:103](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L103)

___

### isDAG

▸ **isDAG**(): *boolean*

**Returns:** *boolean*

Defined in: [Graph.ts:121](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L121)

___

### isStronglyConnected

▸ **isStronglyConnected**(): *boolean*

**Returns:** *boolean*

Defined in: [Graph.ts:112](https://github.com/jlguenego/graph/blob/eefb9d2/src/Graph.ts#L112)
