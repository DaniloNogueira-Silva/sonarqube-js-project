const sub = require('./sub');

test("add 2 - 1 to equal 1", () => {
    expect(sub(2, 1)).toBe(1);
})