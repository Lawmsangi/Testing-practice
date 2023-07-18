function stringLength(string) {
  if (string.length <= 0) {
    throw new Error('string length must be greater than 0');
  } 
  else if (string.length > 10) {
    throw new Error('string length must be smaller than 10');
  }
  return string.length;
}

module.exports = stringLength;