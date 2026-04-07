const isValidPassword = require('./passwordValidator');

describe('Password Validator', () => {
  test('should return false if password is less than 8 characters', () => {
    expect(isValidPassword('Short1!')).toBe(false);
  });

  test('should return false if password does not contain a number', () => {
    expect(isValidPassword('NoNumbersHere!')).toBe(false);
  });

  test('should return false if password does not contain a special character', () => {
    expect(isValidPassword('NoSpecialChars123')).toBe(false);
  });

  test('should return true for a valid password', () => {
    expect(isValidPassword('ValidPassw0rd!')).toBe(true);
  });
});