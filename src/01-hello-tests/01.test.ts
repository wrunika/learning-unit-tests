import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach( ()=> {
  a = 1;
  b = 2;
  c = 3;
} )
test('sum should be correct', ()=>{

  const result1 = sum(a, b);
  const result2 = sum(c, b);

  expect(result1).toBe(3)
  expect(result2).toBe(5)
})

test('multiply should be correct', ()=>{

  const result1 = mult(a, b);
  const result2 = mult(c, b);

  expect(result1).toBe(2)
  expect(result2).toBe(6)
})

test('splitting into words should be correct', ()=>{
  let text = 'hello my friend';

  const result = splitIntoWords(text);

  expect(result.length).toBe(3);
  expect(result[0]).toBe('hello');
  expect(result[1]).toBe('my');
  expect(result[2]).toBe('friend');
})