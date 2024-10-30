export const createArray = <T>(length: number, iterator: (index: number) => T): T[] =>
  new Array(length).fill(0).map((_, index) => iterator(index))
