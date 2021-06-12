const fieldValidate = (name, email, password) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexName = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;

  const testEmail = regexEmail.test(email);
  const testName = regexName.test(name);

  const passwordMinLength = 6;
  const nameLength = 12;
  const result = testEmail && testName && password
    .length >= passwordMinLength && name.length > nameLength;
  return result;
};

export default fieldValidate;
