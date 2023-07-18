const stringLength = require("./string.js");

test("stringLength returns the correct length of a string", () => {
  expect(stringLength("hello")).toBe(5);
});

test("stringLength throws an error for strings with length greater than 10", () => {
  expect(() => {
    stringLength("Hey yoo I'm bored with a string");
  }).toThrow("string length must be smaller than 10");
});

test("stringLength throws an error for strings with length less than 1", () => {
  expect(() => {
    stringLength("");
  }).toThrow("string length must be greater than 0");
});

