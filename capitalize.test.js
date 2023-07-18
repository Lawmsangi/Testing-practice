const capitalize = require('./capitalize.js')

test('First letter must be capital', () => { 
    expect(capitalize("javascript")).toEqual('Javascript')
 })