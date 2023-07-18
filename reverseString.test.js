const reverseString = require("./reverseString.js");

test("Reverse a string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});