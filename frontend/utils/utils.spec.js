import * as utils from './utils';



describe('test utils helper methods', ()=>{
   it('should return sum from str', ()=>{
        expect(utils.getNumber('12 + 25')).toBe(27);

   });
});