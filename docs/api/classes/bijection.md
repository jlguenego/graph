[@jlguenego/graph](../README.md) / [Exports](../modules.md) / Bijection

# Class: Bijection<T, U\>

## Type parameters

Name |
:------ |
`T` |
`U` |

## Table of contents

### Constructors

- [constructor](bijection.md#constructor)

### Properties

- [map](bijection.md#map)

### Methods

- [get](bijection.md#get)
- [getAll](bijection.md#getall)

## Constructors

### constructor

\+ **new Bijection**<T, U\>(`map`: *Map*<T, U\>): [*Bijection*](bijection.md)<T, U\>

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`map` | *Map*<T, U\> |

**Returns:** [*Bijection*](bijection.md)<T, U\>

Defined in: [Bijection.ts:21](https://github.com/jlguenego/graph/blob/eefb9d2/src/Bijection.ts#L21)

## Properties

### map

• **map**: *Map*<T, U\>

## Methods

### get

▸ **get**(`a`: T): U

#### Parameters:

Name | Type |
:------ | :------ |
`a` | T |

**Returns:** U

Defined in: [Bijection.ts:24](https://github.com/jlguenego/graph/blob/eefb9d2/src/Bijection.ts#L24)

___

### getAll

▸ `Static`**getAll**<T, U\>(`s1`: *Set*<T\>, `s2`: *Set*<U\>): *IterableIterator*<[*Bijection*](bijection.md)<T, U\>\>

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type |
:------ | :------ |
`s1` | *Set*<T\> |
`s2` | *Set*<U\> |

**Returns:** *IterableIterator*<[*Bijection*](bijection.md)<T, U\>\>

Defined in: [Bijection.ts:4](https://github.com/jlguenego/graph/blob/eefb9d2/src/Bijection.ts#L4)
