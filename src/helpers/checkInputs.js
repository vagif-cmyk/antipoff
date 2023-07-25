// Только кириллица и не менее 3х символов
function checkName(value) {
  const string = value.trim().toUpperCase();
  const reg = /^[А-Яа-яёЁ]{3,}$/g;
  return reg.test(string);
}

// легальный формат email-а
function checkEmail(email) {
  const string = email.trim().toLowerCase();
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reg.test(string);
}

// вернет true если строка-аргумент:
// Содержит не менее 8 символов
// содержит не менее 1 числа
// содержит хотя бы 1 символ нижнего регистра (az)
// содержит хотя бы 1 символ верхнего регистра (AZ)
// содержит только 0-9a-zA-Z
function checkPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
}

export { checkEmail, checkName, checkPassword };
