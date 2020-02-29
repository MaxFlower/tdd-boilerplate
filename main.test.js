import { getSortedArray } from './main';

describe('Test main file', () => {
    it('getSortedArray should return sorted array', () => {
        const trailArr = [2,6,7];
        expect(getSortedArray(trailArr)).toHaveLength(3);
        expect(getSortedArray(trailArr)).toEqual([7,6,2]);
    });
});
