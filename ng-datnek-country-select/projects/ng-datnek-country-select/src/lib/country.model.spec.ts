import { Country } from './country.model';

describe('Country', () => {
  it('should create an instance', () => {
    expect(new Country(null, null, null)).toBeTruthy();
  });
});
