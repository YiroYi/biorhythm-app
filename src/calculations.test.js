import { calculateBiorhythms } from './calculations';

it('calculates physical the biorhytm', () => {
  const { physical } = calculateBiorhythms('1995-01-01', '2020-02-18');
  expect(physical).toBeCloseTo(0.5196);
}); //"it" is for make a test


it('calculates emotional the biorhytm', () => {
  const { emotional } = calculateBiorhythms('1995-01-01', '2020-02-18');
  expect(emotional).toBeCloseTo(-0.9010);
}); //"it" is for make a test


it('calculates the intellectual the biorhytm', () => {
  const { intellectual } = calculateBiorhythms('1995-01-01', '2020-02-18');
  expect(intellectual).toBeCloseTo(0.8146);
}); //"it" is for make a test
