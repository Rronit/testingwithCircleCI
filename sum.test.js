const summ = require('./sum');

test('1+2=3',()=>{
	expect(summ(1,2)).toBe(3);
})
