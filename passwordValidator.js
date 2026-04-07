function isValidPassword(password) {
  const isLongEnough = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return isLongEnough && hasNumber && hasSpecialChar;
}

module.exports = isValidPassword;